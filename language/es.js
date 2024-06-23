
const translations = {
    
    afktemx: 'Mames que quieres dejar un testamento o que pex',
    afkdone: 'AFK Establecido',
    afkdel: 'Bienvenido/a de regreso',
    afktime: 'Ausente desde hace',
    with: 'Razón',
    afkmsg: 'Avisaré a quienes te mencionen',
    afktag: 'El usuario se encuentra AFK',
    name: 'Nombre',
    noMention: 'Menciona a un Usuario',
    userDb: 'El usuario no se encuntra en mi base de datos',
    example: 'Ejemplo',

    //-- Stick reaction
    killmsg: 'Mató a',
    kismsg: 'Le dio un beso a',
    patmsg: 'Acarició a',
    slapmsg: 'Le dio una bofetada a',

    next: 'Siguiente',
    hi: 'Hola',
    gp: 'Grupo',
    nobbot: 'Este comando solo puede ser usado en el bot principal',
    botqr: '*Usa este Código para convertirte en Bot*\n\n1. Haga click en los tres puntos en la esquina superior derecha.\n2. Toque Dispositivos vinculados\n3. Selecciona *Vincular con el número de teléfono*\n\n*Nota:* El código solo sirve para este número',
    recon: 'Conexión perdida...',
    sesClose: 'La conexión se cerró, Tendras que conectarte manualmente enviando el *ID*',
    connet: 'Conectado con exito',
    connID: '*Conectado con éxito!*\n\nEn unos segundos te mandaremos el *Id* que debes usar para volver a conectarte\n\n*NOTA:* Sal del grupo de *SumiWaBot*\nPide el enlace del grupo antes de salirte',
    connMsg: 'La siguiente vez que se conecte envía el siguiente mensaje para iniciar sesión sin pedir el *código de 8 digitos.*',
    botlist: 'Lista de Bots activos (JadiBot)',
    newcode: (usedPrefix) => `Bien! ya puedes usar *${usedPrefix}botclone* para pedir un nuevo código de 8 digitos.`,
    nsbot: 'Este comando es solo para *Bots Activos*',
    msgcode: 'El nuevo codigo se envio a su privado',
    stopbot: 'Bot desconectado',

    total: 'Total',
    tx: 'Transmisión',
    txdone: 'Transmisión enviada',
    cmdlist: '*LISTA DE  COMANDOS*\n\n▢ *Info:* Si esta en *negrita*  esta bloqueado',
    notext: 'Repita agregando un texto',
    textSe: 'Separe el texto con un',
    reply: 'Responde a un mensaje',
    replyImg: 'Responde a una Imagen',
    cmdSave: 'Comando guardado',

    oversizePrem: 'El tamaño del archivo supera el limite de descarga',
    error: 'Ocurrio un Error, intente mas tarde',
    size: 'Tamaño',
    link: 'Link',
    dev: 'Desarrollador',
    version: 'Versión',
    searchTo: (value, usedPrefix, command) => `Para buscar en ${value}:\n\n📌Use: *${usedPrefix + command} <texto>*\n\nPara descargar de Url:\n*${usedPrefix + command}* <link>`,
    search: (value) => `Ingrese lo que desea buscar en *${value}*`,
    lastUp: 'Última Actualización',
    noLink: (value) => `Ingrese un Link de ${value}`,
    title: 'Título',
    noUsername: 'Escriba un nombre de Usuario',
    username: 'Username',
    followers: 'Seguidores',
    follows: 'Siguiendo',
    bio: 'Biografia',
    posts: 'Publicaciones',
    aploud: 'Subido',
    limitdl: 'El archivo supera el límite de descarga',
    limitdlTe: 'Pásate a premium para poder descargar archivos de hasta',
    duration: 'Duración',
    views: 'Vistas',
    quality: 'Calidad',
    type: 'Tipo',
    desc: 'Descripcion',
    useCmd: 'Uso del comando',
    noNum: 'Ingrese solo numeros',
    random: 'Random',

    purse: 'Monedero',
    dmd: 'Yens',
    money: 'Coins',
    bank: 'Banco',
    itemV: 'Para ver todos los *Items*',
    isNan: 'La cantidad debe ser un número válido',
    voucher: 'Comprobante',
    buy: 'Comprado',
    buyCount: 'Cantidad comprada',
    spent: 'Gastado',
    buyNan: (value) => `No tienes suficientes *${value}* para comprar`,
    noItem: (usedPrefix) => `Ese ítem no existe:\n\n*${usedPrefix}shop* para ver los itens disponibles`,
    noTime: 'Formato de tiempo no válido',
    second: 'Segundo(s)',
    hour: 'Hora(s)',
    minute: 'Minuto(s)',
    day: 'Dia(s)',

    robCd: 'No puedes realizar un *Crimen* en este momento. Debes esperar',
    crime: 'Has cometido un crimen exitosamente',
    crimeAl: 'No fuiste muy cuidadoso al entrar a robar y activaste la alarma. Solo pudiste llevar',
    robMul: '¡Oh no! Tu crimen ha fallado y te han multado con',
    victin: 'Víctima',
    robDo: 'Robaste',
    tag: 'Tag',
    dailyCd: 'Ya recogiste tu recompensa diaria. Vuelve en',
    daily: 'Recompensa Diaria',
    amount: 'Monto',
    dep: (value) => `Has depositado *${value}🪙* al Banco`,
    depNan: 'No tienes dinero para depositar',
    resBt: 'Reinicio',
    lbTitle: 'Tabla de Clasificación',
    top: 'Top',
    lvl: 'Nivel',
    of: 'De',
    you: 'Tú',
    rank: 'Rango',
    fxp: 'Falta para subir de nivel',
    lvlbfor: 'Nivel anterior',
    lvlup: 'Nivel actual',
    mineCd: 'Podras regresar a la mina en',
    mine: 'Genial! minaste',
    restEcon: 'Se restablecio la economia de bot',
    shop: 'Tienda',
    shopMsg: 'Puedes comprar usando',
    prem: 'Premium',
    onTransfer: 'Estas haciendo una transferencia',
    transItem: 'Artículos transferibles',
    confirm: 'Estas seguro de que desea transferir',
    to: 'A',
    payNan: 'Insuficiente para transferir',
    payCd: 'Se acabó el tiempo',
    cancelPay: 'Transferencia cancelada',
    pay: 'Se realizó la transferencia de',
    payError: 'Error al transferir',
    wd: 'Cuantos *Coins* estas intentando retirar?',
    wdYes: 'Has retirado',
    noWd: 'No puedes retirar mas de lo que tienes en el banco',
    weeklyCd: 'Se llama recompensa semanal 😉. Vuelve en',
    weekly: '*RECOMPENSA SEMANAL*\n\n¡Oh! ya ha pasado una semana? De todos modos, aquí tienes',
    workCd: 'Podrás regresar a trabajar en',

    nable: 'Activado',
    disable: 'Desactivado',
    toBot: 'Para este bot',
    toGp: 'Para este grupo',
    gaytex: 'Quién quiere violar a este gay?',
    result: 'Resultado',
    shipCd: 'Podrás elegir otra pareja dentro de',
    shipp: 'La pareja del día',
    toaud: 'Responda al video o nota de voz que desea convertir a mp3 con el comando',
    toav: 'Responda el audio que desea convertir a nota de voz con',

    noGame: 'No esta en partida',
    resGame: 'Se reinició la sesion de *TicTacToe*',
    gameOff: 'El juego a terminado',
    gaDone: 'Respuesta correcta',
    win: 'Ganaste',
    mathOff: 'Se acabó las oportunidades',
    chance: 'Oportunidades',
    answer: 'Respuesta',
    mathError: '*Respuesta incorrecta*\n\nTodavia hay',
    gameMode: 'Dificultades Disponiles',
    mathOn: 'Todavia hay preguntas sin respuesta en este grupo',
    time: 'Tiempo',
    timeOff: 'Se acabó el tiempo!\nLa respuesta es:',
    reward: 'Recompensa',
    pptCd: 'Para volver a jugar debes esperar',
    ppt: (usedPrefix, command) => `Seleccione piedra/papel/tijera\n\n📌 Ejemplo : *${usedPrefix + command}* papel`,
    coinNan: 'No tienes suficientes *Coins* para jugar',
    stone: 'piedra',
    sciss: 'tijera',
    paper: 'papel',
    tie: 'Empate',
    win: 'Ganaste',
    lost: 'Perdiste',
    roulet: (usedPrefix) => `Puedes realizar múltiples apuestas en un juego de ruleta.\n\nUso: *${usedPrefix}roulette* <cantidad> <espace>\n\nMultiplicador de pago`,
    rouletCd: 'Ya has realizado una apuesta. Espera',
    moreInfo: 'Para más información',
    betMin: 'La cantidad de la apuesta debe ser mayor a',
    betMax: 'La cantidad de apuesta supera el límite máximo de',
    betNan: 'No tienes suficientes *Coins* para realizar esa apuesta',
    in: 'en',
    bet: 'Has realizado una apuesta de',
    fell: 'La ruleta cayó en',
    slotC: 'Casi lo logras sigue intentando :)',

    delWarnUser: 'Un admin redujo su advertencia ahora tienesS',
    warnNan: 'El usuario no tiene ninguna advertencia',
    delwarn: 'Unwarn',
    warns: 'Warns',
    warn: 'Advertencia',
    warnRec: 'Recibiste una Advertencia de un Admin',
    numError: 'Numero Incorrecto',
    promote: 'Usuario Promovido',
    demote: 'Usuario Degradado',
    gpInfo: 'Info de Grupo',
    members: 'Miembros',
    gpOwner: 'Dueño del Grupo',
    admin: 'Admin',
    gpConf: 'Configuración de grupo',
    gpConfMsg: 'Configuración de Mensajes',

const translations = {
    
    afktemx: 'Mames que quieres dejar un testamento o que pex',
    afkdone: 'AFK Establecido',
    afkdel: 'Bienvenido/a de regreso',
    afktime: 'Ausente desde hace',
    with: 'Razón',
    afkmsg: 'Avisaré a quienes te mencionen',
    afktag: 'El usuario se encuentra AFK',
    name: 'Nombre',
    noMention: 'Menciona a un Usuario',
    userDb: 'El usuario no se encuntra en mi base de datos',
    example: 'Ejemplo',

    //-- Stick reaction
    killmsg: 'Mató a',
    kismsg: 'Le dio un beso a',
    patmsg: 'Acarició a',
    slapmsg: 'Le dio una bofetada a',

    next: 'Siguiente',
    hi: 'Hola',
    gp: 'Grupo',
    nobbot: 'Este comando solo puede ser usado en el bot principal',
    botqr: '*Usa este Código para convertirte en Bot*\n\n1. Haga click en los tres puntos en la esquina superior derecha.\n2. Toque Dispositivos vinculados\n3. Selecciona *Vincular con el número de teléfono*\n\n*Nota:* El código solo sirve para este número',
    recon: 'Conexión perdida...',
    sesClose: 'La conexión se cerró, Tendras que conectarte manualmente enviando el *ID*',
    connet: 'Conectado con exito',
    connID: '*Conectado con éxito!*\n\nEn unos segundos te mandaremos el *Id* que debes usar para volver a conectarte\n\n*NOTA:* Sal del grupo de *SumiWaBot*\nPide el enlace del grupo antes de salirte',
    connMsg: 'La siguiente vez que se conecte envía el siguiente mensaje para iniciar sesión sin pedir el *código de 8 digitos.*',
    botlist: 'Lista de Bots activos (JadiBot)',
    newcode: (usedPrefix) => `Bien! ya puedes usar *${usedPrefix}botclone* para pedir un nuevo código de 8 digitos.`,
    nsbot: 'Este comando es solo para *Bots Activos*',
    msgcode: 'El nuevo codigo se envio a su privado',
    stopbot: 'Bot desconectado',

    total: 'Total',
    tx: 'Transmisión',
    txdone: 'Transmisión enviada',
    cmdlist: '*LISTA DE  COMANDOS*\n\n▢ *Info:* Si esta en *negrita*  esta bloqueado',
    notext: 'Repita agregando un texto',
    textSe: 'Separe el texto con un',
    reply: 'Responde a un mensaje',
    replyImg: 'Responde a una Imagen',
    cmdSave: 'Comando guardado',

    oversizePrem: 'El tamaño del archivo supera el limite de descarga',
    error: 'Ocurrio un Error, intente mas tarde',
    size: 'Tamaño',
    link: 'Link',
    dev: 'Desarrollador',
    version: 'Versión',
    searchTo: (value, usedPrefix, command) => `Para buscar en ${value}:\n\n📌Use: *${usedPrefix + command} <texto>*\n\nPara descargar de Url:\n*${usedPrefix + command}* <link>`,
    search: (value) => `Ingrese lo que desea buscar en *${value}*`,
    lastUp: 'Última Actualización',
    noLink: (value) => `Ingrese un Link de ${value}`,
    title: 'Título',
    noUsername: 'Escriba un nombre de Usuario',
    username: 'Username',
    followers: 'Seguidores',
    follows: 'Siguiendo',
    bio: 'Biografia',
    posts: 'Publicaciones',
    aploud: 'Subido',
    limitdl: 'El archivo supera el límite de descarga',
    limitdlTe: 'Pásate a premium para poder descargar archivos de hasta',
    duration: 'Duración',
    views: 'Vistas',
    quality: 'Calidad',
    type: 'Tipo',
    desc: 'Descripcion',
    useCmd: 'Uso del comando',
    noNum: 'Ingrese solo numeros',
    random: 'Random',

    purse: 'Monedero',
    dmd: 'Yens',
    money: 'Coins',
    bank: 'Banco',
    itemV: 'Para ver todos los *Items*',
    isNan: 'La cantidad debe ser un número válido',
    voucher: 'Comprobante',
    buy: 'Comprado',
    buyCount: 'Cantidad comprada',
    spent: 'Gastado',
    buyNan: (value) => `No tienes suficientes *${value}* para comprar`,
    noItem: (usedPrefix) => `Ese ítem no existe:\n\n*${usedPrefix}shop* para ver los itens disponibles`,
    noTime: 'Formato de tiempo no válido',
    second: 'Segundo(s)',
    hour: 'Hora(s)',
    minute: 'Minuto(s)',
    day: 'Dia(s)',

    robCd: 'No puedes realizar un *Crimen* en este momento. Debes esperar',
    crime: 'Has cometido un crimen exitosamente',
    crimeAl: 'No fuiste muy cuidadoso al entrar a robar y activaste la alarma. Solo pudiste llevar',
    robMul: '¡Oh no! Tu crimen ha fallado y te han multado con',
    victin: 'Víctima',
    robDo: 'Robaste',
    tag: 'Tag',
    dailyCd: 'Ya recogiste tu recompensa diaria. Vuelve en',
    daily: 'Recompensa Diaria',
    amount: 'Monto',
    dep: (value) => `Has depositado *${value}🪙* al Banco`,
    depNan: 'No tienes dinero para depositar',
    resBt: 'Reinicio',
    lbTitle: 'Tabla de Clasificación',
    top: 'Top',
    lvl: 'Nivel',
    of: 'De',
    you: 'Tú',
    rank: 'Rango',
    fxp: 'Falta para subir de nivel',
    lvlbfor: 'Nivel anterior',
    lvlup: 'Nivel actual',
    mineCd: 'Podras regresar a la mina en',
    mine: 'Genial! minaste',
    restEcon: 'Se restablecio la economia de bot',
    shop: 'Tienda',
    shopMsg: 'Puedes comprar usando',
    prem: 'Premium',
    onTransfer: 'Estas haciendo una transferencia',
    transItem: 'Artículos transferibles',
    confirm: 'Estas seguro de que desea transferir',
    to: 'A',
    payNan: 'Insuficiente para transferir',
    payCd: 'Se acabó el tiempo',
    cancelPay: 'Transferencia cancelada',
    pay: 'Se realizó la transferencia de',
    payError: 'Error al transferir',
    wd: 'Cuantos *Coins* estas intentando retirar?',
    wdYes: 'Has retirado',
    noWd: 'No puedes retirar mas de lo que tienes en el banco',
    weeklyCd: 'Se llama recompensa semanal 😉. Vuelve en',
    weekly: '*RECOMPENSA SEMANAL*\n\n¡Oh! ya ha pasado una semana? De todos modos, aquí tienes',
    workCd: 'Podrás regresar a trabajar en',

    nable: 'Activado',
    disable: 'Desactivado',
    toBot: 'Para este bot',
    toGp: 'Para este grupo',
    gaytex: 'Quién quiere violar a este gay?',
    result: 'Resultado',
    shipCd: 'Podrás elegir otra pareja dentro de',
    shipp: 'La pareja del día',
    toaud: 'Responda al video o nota de voz que desea convertir a mp3 con el comando',
    toav: 'Responda el audio que desea convertir a nota de voz con',

    noGame: 'No esta en partida',
    resGame: 'Se reinició la sesion de *TicTacToe*',
    gameOff: 'El juego a terminado',
    gaDone: 'Respuesta correcta',
    win: 'Ganaste',
    mathOff: 'Se acabó las oportunidades',
    chance: 'Oportunidades',
    answer: 'Respuesta',
    mathError: '*Respuesta incorrecta*\n\nTodavia hay',
    gameMode: 'Dificultades Disponiles',
    mathOn: 'Todavia hay preguntas sin respuesta en este grupo',
    time: 'Tiempo',
    timeOff: 'Se acabó el tiempo!\nLa respuesta es:',
    reward: 'Recompensa',
    pptCd: 'Para volver a jugar debes esperar',
    ppt: (usedPrefix, command) => `Seleccione piedra/papel/tijera\n\n📌 Ejemplo : *${usedPrefix + command}* papel`,
    coinNan: 'No tienes suficientes *Coins* para jugar',
    stone: 'piedra',
    sciss: 'tijera',
    paper: 'papel',
    tie: 'Empate',
    win: 'Ganaste',
    lost: 'Perdiste',
    roulet: (usedPrefix) => `Puedes realizar múltiples apuestas en un juego de ruleta.\n\nUso: *${usedPrefix}roulette* <cantidad> <espace>\n\nMultiplicador de pago`,
    rouletCd: 'Ya has realizado una apuesta. Espera',
    moreInfo: 'Para más información',
    betMin: 'La cantidad de la apuesta debe ser mayor a',
    betMax: 'La cantidad de apuesta supera el límite máximo de',
    betNan: 'No tienes suficientes *Coins* para realizar esa apuesta',
    in: 'en',
    bet: 'Has realizado una apuesta de',
    fell: 'La ruleta cayó en',
    slotC: 'Casi lo logras sigue intentando :)',

    delWarnUser: 'Un admin redujo su advertencia ahora tienesS',
    warnNan: 'El usuario no tiene ninguna advertencia',
    delwarn: 'Unwarn',
    warns: 'Warns',
    warn: 'Advertencia',
    warnRec: 'Recibiste una Advertencia de un Admin',
    numError: 'Numero Incorrecto',
    promote: 'Usuario Promovido',
    demote: 'Usuario Degradado',
    gpInfo: 'Info de Grupo',
    members: 'Miembros',
    gpOwner: 'Dueño del Grupo',
    admin: 'Admin',
    gpConf: 'Configuración de grupo',
    gpConfMsg: 'Configuración de Mensajes',
    kick: 'Usuario Eliminado',
    linkGp: 'Link del Grupo',
    preNan: 'Ingresa el prefijo de un numero válido',
    gpNanPre: 'El grupo no tiene miembros con el prefijo',
    userPref: 'Usuarios con el prefijo',
    profile: 'Perfil',
    number: 'Número',
    age: 'Edad',
    gender: 'Género',
    lang: 'Idioma',
    regOn: 'Registrado',
    xpUp: 'Listo para',
    upNan: 'Falta para subir de Nivel',
    gpRulesNan: 'Grupo sin Reglas por el momento',
    gpRules: 'Normas del Grupo',
    rulesMsgOn:'Se estableció las *Normas del Grupo*',
    rulesMsg: 'Ingrese las Normas del Grupo',
    welMsgOn: 'Se estableció el mensaje de Bienvenida',
    leaMsgOn: 'Se estableció el mensaje de Despedida',
    welMsg: 'Ingrese el mensaje de Bienvenida\n\n@user (mención)\n@group (Nombre de grupo)\n@desc (description de grupo)',
    leaMsg: 'Ingrese el mensaje de Despedida\n\n@user (mención)',
    gpSetting: 'Configuración de grupo\n\nAbrir y cerrar el grupo', 
    user: 'Usuario',
    userWarn: 'Usuario Advertido',
    wningUser: (war) => `Si recibes *${war}* advertencias serás eliminado automáticamente del grupo`,
    warnMaxU: (war) => `El usuario superó las *${war}* advertencias por lo tanto será eliminado`,
    blockNan: 'No hay Números Bloqueados',
    bckList: 'Lista de Bloqueados',
    donate: '*DONACION*\npuedes donar si quieres ayudar a mantener el bot activo',
    langList: 'Seleccione el idioma que desea utilizar\n\n≡ *Idiomas disponibles*',
    expire: 'Expira en',
    ping: 'Velocidad',
    uptime: 'Tiempo Activo',
    gpNsfw: (usedPrefix) => `El *grupo* no admite contenido *NSFW*\n\n• Usa este grupo:\n${bgp3}\n\nSi eres admin habilita con\n*${usedPrefix}on* nsfw`,
    nsfwAge: 'Eres menor de edad! vuelve cuando tengas mas de 18',
    addPremUser: 'Ahora te conviertes en Usuario Premium',
    banChat: 'Se desactivó el Bot en este grupo',
    unBanChat: 'Bot Activo en este grupo',
    banUser: 'Ya no podra usar mis comandos',
    unBanUser: 'Ha sido desbaneado',
    restartBot: 'Reiniciando Bot...\nEspere un momento',

    genderList: 'Géneros disponibles',
    man: 'Hombre',
    woman: 'Mujer',
    other: 'Otro',
    regIsOn: 'Ya estás registrado\n\n¿Quiere volver a registrarse?\n\n 📌 Use este comando para eliminar su registro',
    nameMax: 'El nombre es demasiando largo',
    oldReg: 'Wow el abuelo quiere jugar al bot',
    numSn: 'Número de Serie',
    snVerify: 'Verifique su número de serie con el comando',
    snError: 'Número de serie incorrecto',
    unReg: 'Registro Eliminado',
    stickError: 'La conversión ha fallado, intenta enviar primero *imagen/video/gif* y luego responde con el comando',
    tgStick: 'ingrese un link de un pack de stickers de telegram',
    replyStick: 'Responda a un Sticker',
    ssWeb: 'Ingrese la Url de una pagina',
    tradList: 'Lista de Idiomas Admitidos',
    searchError: 'No se encontraron resultados',

    rownerH: 'Este comando solo puede ser utilizado por el *Creador del bot*',
    ownerH: 'Este comando solo puede ser utilizado por el *Owner y Sub Bots*',
    modsH: 'Esta función es solo para *Para moderadores del Bot*',
    premH: 'Este comando es solo para miembros *Premium*\n\nEscribe */premium* para más info',
    groupH: 'Este comando solo se puede usar en grupos',
    privateH: 'Este comando solo se puede usar en el chat *privado del Bot*',
    adminH: 'Este comando es solo para *Admins* del grupos',
    botAdmin: '¡Para usar este comando debo ser *Administrador!*',
    unregH: 'Regístrese para usar esta función  Escribiendo:\n\n*/reg*',
    ig: `Apoyame con el proyecto con una pequeña donación UwU`
}

export default translations
￼Enter
