import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CirclePlus } from 'lucide-react';

export default function UserAccount() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <h1 className="text-[52px] font-bold p-4 pb-2 text-[#556B2F]">Sua conta</h1>
      <div className="max-w-2xl mx-auto mt-10">
        <div className="flex items-start space-x-6 mb-6">
        <div className="relative">
          <Avatar className="w-48 h-48 border-2 border-gray-200 rounded-full overflow-hidden" style={{ borderRadius: '50%' }}>
            <AvatarImage src="/placeholder.svg" alt="Fulano Ciclano"/>
            <AvatarFallback>FC</AvatarFallback>
          </Avatar>
          <Button variant="ghost"
          className="absolute bottom-0 right-0 bg-transparent p-2 ">
          <CirclePlus style={{color:'black'}}/>
            </Button>
          </div>
          <div className="flex-grow">
          <div className="space-y-5">
              <h2 className="text-3xl font-semibold">Fulano Ciclano</h2>
              <p className="text-gray-600">fulanociclano@mail.com</p>
            </div>
            <div className="button-container  mt-5">
              <Button style={{color: 'white'}} className="w-48 bg-[#9B4701] hover:bg-[#9B4701]/90 text-white py-3 h-auto">
                Editar Informações
              </Button>
              <Button style={{color: 'white'}}
              className="w-48 bg-[#F2BF5E] hover:bg-[#F2BF5E]/90 text-white py-3 h-auto">
                Redefinir Senha
              </Button>
              </div>
          </div>
        </div>
        <Button 
        style={{
          color: 'white',
          height: '64px',
        }}
        className="w-full bg-[#FF6B6B] hover:bg-[#FF6347]/90 text-white py-3">
          Excluir conta
        </Button>
      </div>
    </div>
  )
}