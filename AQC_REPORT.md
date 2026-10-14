# Auditoria VetFlowCare — site Home Care S.V3.1

Data: 14/10/2026. Repositório de referência: https://github.com/brunorizzieri86-svg/vetflowcare-site
Commit conferido: 4ff7f6d351f4ecc8883189d66878d07188799c8f.

## Resultado

**AQC técnica automatizada: 90/100. Critérios técnicos aprovados; revisão visual em navegador pendente.**
A nota utiliza os pesos abaixo. Os 10 pontos da revisão visual não foram atribuídos. A auditoria foi executada por verificações automatizadas separadas da implementação, sem revisão humana independente. Não representa certificação completa do aplicativo.

| Critério | Peso | Resultado |
|---|---:|---|
| Destino do aplicativo e resposta HTTP | 20 | 20 — aprovado |
| Destino do Pro, mensagem e redirecionamento WhatsApp | 15 | 15 — aprovado |
| Número consistente com site e aplicativo atuais | 5 | 5 — aprovado |
| Arquivos e caminhos das telas de celular | 15 | 15 — aprovado |
| Integridade das novas imagens incorporadas | 10 | 10 — aprovado |
| Preservação do repositório e domínio | 10 | 10 — aprovado |
| Âncoras, IDs e proteção dos links externos | 5 | 5 — aprovado |
| Interações de menu, FAQ e carrossel em DOM simulado | 10 | 10 — aprovado |
| Renderização e interação em navegador real | 10 | 0 — não verificado |
| **Total** | **100** | **90** |

## Acesso ao aplicativo

Todos os 4 links de acesso usam https://app.vetflowcare.com.br.
O endereço respondeu HTTP 200 e entregou página com título “VetFlowCare Pro - Gestão Veterinária”. O site atual do repositório usa o mesmo destino. A resposta confirma acesso à página; login, registros e funcionalidades internas do app não foram testados.

## Solicitação do Plano Pro

Botão: “Assinar pelo WhatsApp”.
Número: **+55 11 91265-9906**.
Link: https://wa.me/5511912659906?text=Ol%C3%A1!%20Quero%20assinar%20o%20Plano%20Pro%20do%20VetFlowCare%20%F0%9F%90%BE
Mensagem decodificada: “Olá! Quero assinar o Plano Pro do VetFlowCare 🐾”.

Os 6 links de WhatsApp no index usam esse número. Ele também aparece no site publicado e no código da página atual do app. A consulta HTTP ao wa.me respondeu 200 e redirecionou ao serviço oficial do WhatsApp com phone=5511912659906. Isso confirma o destino configurado, não a titularidade ou disponibilidade de atendimento dessa conta. Não houve envio de mensagem, solicitação de plano, pagamento ou ativação.

## Imagens

As 5 imagens fornecidas anteriormente estão incorporadas ao HTML (data:image/jpeg;base64), com 6 ocorrências porque o logo é usado também no cabeçalho. Foram decodificadas e verificadas como imagens JPEG íntegras. Não é preciso subir essas imagens novas separadamente.

As telas de celular e outras imagens existentes continuam como arquivos. Todos os caminhos locais foram conferidos e estão presentes no ZIP:
- screen1.jpg.jpeg até screen5.jpg.jpeg
- img1.jpg.jpeg até img4.jpg.jpeg
- logo.jpg e og.jpg

Os nomes dos arquivos são sensíveis a maiúsculas e minúsculas no GitHub Pages. Não renomeie.

## Conteúdo preservado

O pacote contém os 20 arquivos originais do repositório, byte a byte, mais a substituição do index.html da raiz. Foram preservados CNAME (www.vetflowcare.com.br), robots.txt, sitemap.xml, a verificação Google, imagens originais e as páginas app/, instalar/ e tutorial/. Somente o index.html principal foi atualizado. O pacote não inclui .git nem credenciais.

O subdomínio app.vetflowcare.com.br é um destino externo à página institucional; a entrega não altera sua hospedagem. A rota legada app/index.html do repositório foi preservada como estava.

## Testes de interação

O JavaScript foi executado em DOM simulado, sem conexão com a conta do usuário:
- PASS: Menu abre e bloqueia rolagem
- PASS: Escape fecha o menu
- PASS: Link do menu fecha painel
- PASS: FAQ abre e fecha com aria-expanded correto
- PASS: FAQ mantém apenas uma resposta aberta
- PASS: Carrossel seleciona todas as cinco telas reais
- PASS: App e Pro têm destinos corretos
- PASS: Nenhum erro de execução dos scripts

## Limitações

O ambiente não tinha navegador Chromium disponível. Portanto, não houve revisão de screenshots, alinhamento visual, sobreposições, contraste medido, rolagem ou layout responsivo em navegador real. O DOM simulado confirma lógica das interações, não a aparência. Os preços e promessas de funcionalidades foram mantidos da base fornecida; a implementação de cada recurso no app não foi auditada.

## Publicação

Nenhum arquivo foi enviado ao GitHub e o site em produção não foi modificado. Consulte GUIA_GITHUB.md antes de publicar.
