export interface ParteInteressada {
  id: number;
  nome: string;
  tipo: 'PF' | 'PJ';
  cpfCnpj: string;
  email: string;
}

