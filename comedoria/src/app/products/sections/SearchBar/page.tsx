// src/components/SearchBar/SearchBar.tsx
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => (
  <div className="relative flex justify-between mb-4">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    <Input 
      type="text" 
      placeholder="Buscar" 
      className="pl-10 w-full" 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
);