"use client"

import React, { createContext, useContext, useId } from 'react'

interface RadioGroupContextType {
  value: string
  onChange: (value: string) => void
}

const RadioGroupContext = createContext<RadioGroupContextType | undefined>(undefined)

interface RadioGroupProps {
  value: string
  onValueChange: (value: string) => void
  children: React.ReactNode
  className?: string
}

export function RadioGroup({ value, onValueChange, children, className = '' }: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{ value, onChange: onValueChange }}>
      <div role="radiogroup" className={`flex flex-col space-y-2 ${className}`}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}

interface RadioGroupItemProps {
  value: string
  id?: string
  children?: React.ReactNode
  className?: string
}

export function RadioGroupItem({ value, id, children, className = '' }: RadioGroupItemProps) {
  const context = useContext(RadioGroupContext)
  const generatedId = useId()
  const itemId = id || generatedId

  if (!context) {
    throw new Error('RadioGroupItem must be used within a RadioGroup')
  }

  const { value: groupValue, onChange } = context

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <input
        type="radio"
        id={itemId}
        checked={groupValue === value}
        onChange={() => onChange(value)}
        className="form-radio h-4 w-4 text-[#45480F] border-[#45480F] focus:ring-[#45480F]"
      />
      <label htmlFor={itemId} className="text-sm font-medium text-gray-700">
        {children}
      </label>
    </div>
  )
}

// Usage example
export default function RadioGroupExample() {
  const [selectedValue, setSelectedValue] = React.useState('option1')

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Select an option:</h2>
      <RadioGroup value={selectedValue} onValueChange={setSelectedValue}>
        <RadioGroupItem value="option1">Option 1</RadioGroupItem>
        <RadioGroupItem value="option2">Option 2</RadioGroupItem>
        <RadioGroupItem value="option3">Option 3</RadioGroupItem>
      </RadioGroup>
      <p className="mt-4">Selected value: {selectedValue}</p>
    </div>
  )
}