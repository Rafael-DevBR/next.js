export type ChecklistItemProps = {
  id: string
  label: string
  checked: boolean
  onChange: (id: string) => void
}