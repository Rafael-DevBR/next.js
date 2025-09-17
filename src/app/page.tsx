'use client'

import { checklistItems } from './data/checklistitem'
import { ChecklistItem } from './components/CheckListItem'
import { Button } from './components/Button'
import { useChecklist } from './hooks/useChecklist'

export default function Home() {
  const itemIds = checklistItems.map(item => item.id)

  const { checkedItems, toggleItem } = useChecklist(itemIds)

  const handleSubmit = () => {
    const resultado = checklistItems.map(item => ({
      item: item.label,
      status: checkedItems[item.id] ? 'OK' : 'FALHA',
    }))
    console.log('Checklist enviado:', resultado)
    alert('Checklist enviado com sucesso!')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Checklist de Caminhão
        </h1>

        <div className="space-y-2">
          {checklistItems.map(item => (
            <ChecklistItem
              key={item.id}
              id={item.id}
              label={item.label}
              checked={!!checkedItems[item.id]}
              onChange={toggleItem}
            />
          ))}
        </div>

          <Button
            onClick={handleSubmit}
            className="mt-6 w-full"
          >
            Enviar Checklist
          </Button>

      </div>
    </div>
  )
}
