import { BarChart2, Users, ShoppingBag, Users as ClientsIcon } from "lucide-react"

const Sidebar = () => (
  <aside className="w-64 bg-white shadow-md h-full">
    <nav className="p-4">
      <ul className="space-y-2">
        <li>
          <a href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded text-xl">
            <BarChart2 className="mr-2" />
            Estatísticas
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded text-xl">
            <Users className="mr-2" />
            Funcionários
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded text-xl">
            <ShoppingBag className="mr-2" />
            Produtos
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded text-xl">
            <ClientsIcon className="mr-2" />
            Clientes
          </a>
        </li>
      </ul>
    </nav>
  </aside>
)

export default Sidebar