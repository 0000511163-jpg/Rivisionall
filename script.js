// Seleciona o botão de salvar e os campos de entrada do formulário
const botaoSalvar = document.getElementById('BotaoSalvar');
const campoNome = document.getElementById('nome');
const campoEmail = document.getElementById('email');

// Adiciona o evento de clique para gerar e baixar o arquivo TXT
botaoSalvar.addEventListener('click', () => {
    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();

    // Validação para garantir que nenhum campo fique vazio
    if (!nome || !email) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Organiza a estrutura do texto que será inserido no arquivo
    const conteudoTXT = `Dados do Formulário:\nNome: ${nome}\nEmail: ${email}`;

    // Cria o arquivo virtual (Blob) do tipo texto plano
    const blob = new Blob([conteudoTXT], { type: 'text/plain;charset=utf-8' });
    
    // Cria um link de download temporário no navegador
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dados_usuarios.txt'; // Nome do arquivo a ser baixado
    
    // Simula o clique para iniciar o download e limpa a memória
    link.click();
    URL.revokeObjectURL(link.href);
});
