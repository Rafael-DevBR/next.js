import { request } from "./api";
import {ChecklistItemProps} from "../types/checklistitem_type"

export function getChecklist() {
  return request<ChecklistItemProps[]>("/checklist", "GET");
}

export function createChecklist(data: ChecklistItemProps) {
  return request<ChecklistItemProps>("/checklist", "POST", data);
}

export function updateChecklist(id: number, data: ChecklistItemProps) {
  return request<ChecklistItemProps>(`/checklist/${id}`, "PUT", data);
}

export function deleteChecklist(id: number) {
  return request<void>(`/checklist/${id}`, "DELETE");
}