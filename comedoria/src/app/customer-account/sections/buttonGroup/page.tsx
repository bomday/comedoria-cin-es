import { Button } from "@/components/ui/button";
// Componente ButtonGroup para os botões de ação
export default function ButtonGroup() {
    return (
      <div className="flex flex-col space-y-4 mt-5">
        <Button className="w-48 bg-[rgba(var(--brown-button))] hover:bg-[rgba(var(--brown-hover))] text-white py-3">
          Editar Informações
        </Button>
        <Button className="w-48 bg-[rgba(var(--light-yellow))] hover:bg-[rgba(var(-yellow-hover))]/90 text-white py-3">
          Redefinir Senha
        </Button>
      </div>
    );
  }