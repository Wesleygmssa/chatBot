// leitor de qr code
const qrcode = require("qrcode-terminal");
const { Client, Buttons, List, MessageMedia } = require("whatsapp-web.js");
const client = new Client();
// serviço de leitura do qr code
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});
// após isso ele diz que foi tudo certo
client.on("ready", () => {
  console.log("Tudo certo! WhatsApp conectado.");
});
// Inicializa tudo
client.initialize();

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Funil

client.on("message", async (msg) => {
  if (
    msg.body.match(
      /(menu|Menu|oi|Oi|Olá|olá|ola|Ola|e aí|E aí|Oi,|Oi!|Olá!|Oi, tudo bem?|Olá, tudo bem?|como vai|Como vai|bom dia|Bom dia|boa tarde|Boa tarde|boa noite|Boa noite|oi pessoal|Oi pessoal|salve|Salve|oi galera|Oi galera|oi amigo|Oi amigo|olá pessoal|Olá pessoal|tudo bem|Tudo bem|como está|Como está|tudo jóia|Tudo jóia|tudo certo|Tudo certo|beleza|Beleza|alô|Alô|quem está aí|Quem está aí|fala|Fala|fala aí|Fala aí|oiê|Oiê|oi meu chapa|Oi meu chapa|cheguei|Cheguei|oie|Oie|oi sumido|Oi sumido|oi meu bem|Oi meu bem|como anda|Como anda|e aí, beleza|E aí, beleza|oi querido|Oi querido|oi, como você está?|Oi, como você está?|oi gente|Oi gente|oi, tudo certo?|Oi, tudo certo?|opa|Opa|oi galera, beleza?|Oi galera, beleza?|tamo junto|Tamo junto|oi, e aí?|Oi, e aí?|oi meu querido|Oi meu querido|como você está?|Como você está?|qual é|Qual é|e aí, tranquilo?|E aí, tranquilo?)/i
    ) &&
    msg.from.endsWith("@c.us")
  ) {
    const chat = await msg.getChat();

    await delay(3000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(3000);
    const contact = await msg.getContact();
    const name = contact.pushname;
    await client.sendMessage(
      msg.from,
      "Olá! " +
        name.split(" ")[0] +
        "Sou o assistente virtual da **PraticHup**. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Como funciona o serviço\n2 - Preços e pacotes\n3 - Benefícios dos nossos serviços\n4 - Como contratar\n5 - Outras dúvidas"
    );
    await delay(3000);
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(5000);
  }

  if (msg.body !== null && msg.body === "1" && msg.from.endsWith("@c.us")) {
    const chat = await msg.getChat();

    await delay(3000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(3000);
    await client.sendMessage(
      msg.from,
      "Na **PraticHup**, oferecemos soluções visuais completas para empresas e eventos. Criamos sites, logotipos e materiais personalizados, além de produzir imagens profissionais com o uso de câmeras e drones.\n\nNossa proposta é fornecer um serviço diferenciado e de alta qualidade para atender suas necessidades visuais."
    );

    await delay(3000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(3000);
    await client.sendMessage(
      msg.from,
      "COMO FUNCIONA?\nÉ simples:\n\n1º Passo: Faça seu cadastro e escolha o pacote que deseja.\n\n2º Passo: Após o pagamento, você terá acesso à nossa plataforma para início imediato dos serviços.\n\n3º Passo: Receba materiais de alta qualidade, como seu site, logotipo e imagens profissionais."
    );

    await delay(3000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(3000);
    await client.sendMessage(msg.from, "Link para cadastro: https://site.com");
  }

  if (msg.body !== null && msg.body === "2" && msg.from.endsWith("@c.us")) {
    const chat = await msg.getChat();

    await delay(3000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(3000);
    await client.sendMessage(
      msg.from,
      "*Pacote Básico:* R$100,00 (site simples + logotipo básico)\n\n*Pacote Completo:* R$250,00 (site personalizado + logotipo profissional + imagens para redes sociais)\n\n*Pacote Premium:* R$500,00 (site completo + logotipo premium + imagens com drone e fotografia profissional)"
    );

    await delay(3000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(3000);
    await client.sendMessage(msg.from, "Link para cadastro: https://site.com");
  }

  if (msg.body !== null && msg.body === "3" && msg.from.endsWith("@c.us")) {
    const chat = await msg.getChat();

    await delay(3000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(3000);
    await client.sendMessage(
      msg.from,
      "Nossos serviços oferecem:\n\n1. Sites personalizados para sua empresa.\n2. Logotipos exclusivos.\n3. Imagens de alta qualidade para promover seu negócio.\n4. Drones para captura de imagens aéreas em eventos.\n\nTudo com a melhor qualidade."
    );

    await delay(3000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(3000);
    await client.sendMessage(msg.from, "Link para cadastro: https://site.com");
  }

  if (msg.body !== null && msg.body === "4" && msg.from.endsWith("@c.us")) {
    const chat = await msg.getChat();

    await delay(3000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(3000);
    await client.sendMessage(
      msg.from,
      "Para contratar nossos serviços, basta acessar nosso site ou entrar em contato por aqui, pelo WhatsApp.\n\nApós a adesão, você terá acesso imediato às nossas soluções."
    );

    await delay(3000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(3000);
    await client.sendMessage(msg.from, "Link para cadastro: https://site.com");
  }

  if (msg.body !== null && msg.body === "5" && msg.from.endsWith("@c.us")) {
    const chat = await msg.getChat();

    await delay(3000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(3000);
    await client.sendMessage(
      msg.from,
      "Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse WhatsApp ou visite nosso site: https://site.com"
    );
  }
});
