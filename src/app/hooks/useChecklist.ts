'use client';

import { useEffect, useState } from "react";
import { ChecklistItemProps } from "../types/checklistitem_type";
import {
  getChecklist,
  createChecklist,
  updateChecklist,
  deleteChecklist,
} from "../services/checklist";

export function useChecklist() {
  const [data, setData] = useState<ChecklistItemProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Buscar checklist inicial
  useEffect(() => {
    setLoading(true);
    getChecklist()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Criar
  const addChecklist = async (item: ChecklistItemProps) => {
    try {
      const newItem = await createChecklist(item);
      setData((prev) => [...prev, newItem]);
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Atualizar
  const editChecklist = async (id: string, item: ChecklistItemProps) => {
    try {
      const updated = await updateChecklist(id, item);
      setData((prev) =>
        prev.map((c) => (c.id === id ? updated : c))
      );
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Deletar
  const removeChecklist = async (id: number) => {
    try {
      await deleteChecklist(id);
      setData((prev) => prev.filter((c) => c.id !== id));
    } catch (err: any) {
      setError(err.message);
    }
  };

  return {
    data,
    loading,
    error,
    addChecklist,
    editChecklist,
    removeChecklist,
  };
}
