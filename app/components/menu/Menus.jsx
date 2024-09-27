const menuItemsLocal = [
    {
        name: "Dashboard",
        link: "/",
    },
    {
        name: "Principais Ferramentas",
        link: "#",
        submenu: [
            { name: "Gerador de Rifa - Impressão", link: "/configuracoes/retirar-pontos" },
            { name: "Comprovante de Pagamento", link: "/configuracoes/retirar-tracos" },
            { name: "Comprovante de Votação", link: "/configuracoes/retirar-tracos" },
            { name: "Placar Online A x B", link: "/configuracoes/retirar-espacos" },
        ],
    },
    {
        name: "Retirar Caracteres",
        link: "#",
        submenu: [
            { name: "Retirar Pontos", link: "/caracteres/retira-pontos" },
            { name: "Retirar Traços", link: "/caracteres/retirar-tracos" },
            { name: "Retirar Espaços", link: "/caracteres/retirar-espacos" },
        ],
    },
    {
        name: "Calculo de área",
        link: "#",
        submenu: [
            { name: "Área do Quadrado", link: "/configuracoes/retirar-pontos" },
            { name: "Área do Retângulo", link: "/configuracoes/retirar-tracos" },
            { name: "Área de Hectares", link: "/configuracoes/retirar-espacos" },
        ],
    }, 
    {
        name: "Manipular Textos",
        link: "#",
        submenu: [
            { name: "Contador de Caracteres", link: "/configuracoes/retirar-pontos" },
            { name: "Inverter Texto", link: "/configuracoes/retirar-tracos" },
            { name: "Limpar números do texto", link: "/configuracoes/retirar-espacos" },
        ],
    }, 
    {
        name: "Manipular Números",
        link: "#",
        submenu: [
            { name: "Número por Extenso", link: "/configuracoes/retirar-pontos" },
            { name: "Calculadora Online", link: "/configuracoes/retirar-tracos" },
            { name: "Limpar texto dos números", link: "/configuracoes/retirar-espacos" },
        ],
    },

    {
        name: "Configurações",
        link: "#",
        submenu: [
            { name: "Perfil", link: "/configuracoes/perfil" },
            { name: "Segurança", link: "/configuracoes/seguranca" },
        ],
    },
    {
        name: "Relatórios",
        link: "#",
        submenu: [
            { name: "Mensais", link: "/relatorios/mensais" },
            { name: "Anuais", link: "/relatorios/anuais" },
        ],
    },
    ,
    {
        name: "Documentação",
        link: "#",
        submenu: [
            { name: "Como Utilizar", link: "/documentacao/como-utilizar" },
            { name: "Referências", link: "/documentacao/referencias" },
        ],
    },
];

export default menuItemsLocal;