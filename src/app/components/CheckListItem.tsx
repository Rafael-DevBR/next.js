import { ChecklistItemProps } from '../types/checklistitem_type'

export function ChecklistItem({
  id,
  label,
  checked,
  onChange,
}: ChecklistItemProps) {
  return (
    <label className="flex items-center space-x-2 p-2 border-b">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(id)}
        className="h-5 w-5 text-blue-600"
      />
      <span className="text-gray-800">{label}</span>
    </label>
  )
}