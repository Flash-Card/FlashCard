export default {
  1: [{
    name: 'dictionary',
    options: { keyPath: 'index', autoIncrement: true },
    indexes: [
      { name: 'index', keyPath: 'index', option: { unique: true } },
      { name: 'key', keyPath: 'key', option: { unique: true } },
    ],
    fixture: [],
  }, {
    name: 'types',
    options: { keyPath: 'id', autoIncrement: false },
    indexes: [
      { name: 'id', keyPath: 'id', option: { unique: true } },
      { name: 'title', keyPath: 'title', option: { unique: true } },
    ],
    fixture: [
      {
        id: '0',
        title: 'article',
        meta: {
          description: 'Слова, выполняющие функцию показателя определённости-неопределённости',
          transcription: '[ˈɑːrtɪkl]',
        },
      },
      {
        id: '1',
        title: 'noun',
        meta: {
          description: 'Обозначает предмет и отвечает на вопросы кто? что?: человек, книга',
          transcription: '[naʊn]',
        },
      },
      {
        id: '2',
        title: 'verb',
        meta: {
          description: 'Обозначает действие или состояние и отвечает на вопросы что делать? что делает? что делал? что будет делать?: читать, стоять',
          transcription: '[vɜːb]',
        },
      },
      {
        id: '4',
        title: 'adjective',
        meta: {
          description: 'Называет признаки предметов и отвечает на вопросы какой? какая? какое? какие? чей?: хороший, быстрый',
          transcription: '[ˈædʒ.ek.tɪv]',
        },
      },
      {
        id: '5',
        title: 'adverb',
        meta: {
          description: 'Обозначает признак действия, качества или предмета и отвечает на вопросы как? когда? почему? где?: хорошо, быстро',
          transcription: '[ˈæd.vɜːb]',
        },
      },
      {
        id: '6',
        title: 'pronoun',
        meta: {
          description: 'Часть речи, которая указывает на лицо, предмет или признак, но не называет их: я, ты',
          transcription: '[ˈproʊ.naʊn]',
        },
      },
      {
        id: '7',
        title: 'participle one',
        meta: {
          description: 'Особая форма глагола, отвечает на вопрос  какой?: пишущий, открывающий',
          transcription: '[pɑːˈtɪsɪpl̩ wʌn]',
        },
      },
      {
        id: '8',
        title: 'participle two',
        meta: {
          description: 'Особая форма глагола, отвечает на вопрос  какой?: написанный, открытый',
          transcription: '[pɑːˈtɪsɪpl̩ tuː]',
        },
      },
      {
        id: '9',
        title: 'preposition',
        meta: {
          description: 'Служебная неизменяемая часть речи, которая соединяет слова (отличать от союзов, которые соединяют не слова, а синтаксические единицы: члены предложения или части сложного предложения): в, к, с',
          transcription: '[ˌprep.əˈzɪʃ.ən]',
        },
      },
      {
        id: '10',
        title: 'conjunction',
        meta: {
          description: 'Служебная неизменяемая часть речи, которая соединяет члены предложения и/или части сложного предложения (следует отличать от предлогов, которые соединяют не синтаксические единицы, а слова): и, но',
          transcription: '[kənˈdʒʌŋk.ʃən]',
        },
      },
      {
        id: '11',
        title: 'interjection',
        meta: {
          description: 'Неизменяемое слово, выражающее какое-н. непосредственное чувство: ах, оу',
          transcription: '[ˌɪn.təˈdʒek.ʃən]',
        },
      },
      {
        id: '12',
        title: 'particle',
        meta: {
          description: 'Служебные слова, которые придают дополнительные смысловые или эмоциональные оттенки предложениям и отдельным словам: не, ни',
          transcription: '[ˈpɑː.tɪ.kl̩]',
        },
      },
      {
        id: '13',
        title: 'numeral',
        meta: {
          description: 'Часть речи, которая обозначает количество предметов; отвечает на вопрос сколько?, порядок предметов при счете; отвечает на вопрос который?: один, два, первый, второй',
          transcription: '[ˈnjuː.mə.rəl]',
        },
      },
      {
        id: '14',
        title: 'determiner',
        meta: {
          description: 'Ряд слов, одно из которых почти всегда ставится перед существительным или перед определением с существительным: артикли, слабые формы some и any, и т.д.',
          transcription: '[dɪˈtɜː.mɪ.nər]',
        },
      },
      {
        id: '15',
        title: 'infinitive',
        meta: {
          description: 'Неличная форма  глагола, которая обозначает только действие, не указывая ни лица, ни числа и отвечает на вопросы: что делать? что сделать?: написать, ответить',
          transcription: '[ɪnˈfɪnətɪv]',
        },
      },
      {
        id: '16',
        title: 'modal verb',
        meta: {
          description: 'Вспомогательный глагол особого типа (не является отдельной частью речи): can, may',
          transcription: '[ˈmoʊ.dəl vɜːb]',
        },
      },
      {
        id: '17',
        title: 'phrasal verb',
        meta: {
          description: 'Комбинация глагола с предлогом (или с наречием, или с предлогом и с наречием одновременно), которая является одним членом предложения и образует таким образом цельную семантическую единицу (не является отдельной частью речи): stand up, sit down',
          transcription: '[freɪzl vɜːb]',
        },
      },
      {
        id: '18',
        title: 'collocation',
        meta: {
          description: 'Сочетание двух или нескольких слов в составе предложения, объединённых грамматически и по смыслу: лист бумаги. ',
          transcription: '[ˌkɒl.əˈkeɪ.ʃən]',
        },
      },
    ],
  }, {
    name: 'lexicon',
    options: { keyPath: 'key', autoIncrement: false },
    indexes: [
      { name: 'key', keyPath: 'key', option: { unique: true } },
    ],
    fixture: [],
  }, {
    name: 'sets',
    options: { keyPath: 'id', autoIncrement: false },
    indexes: [
      { name: 'id', keyPath: 'id', option: { unique: true } },
    ],
    fixture: [
      {
        id: 'oxford3000',
        title: 'The Oxford 3000',
        isLoaded: false,
        meta: {
          description: 'The Oxford 3000 is a list of the 3000 most important words to learn in English.',
          url: 'https://raw.githubusercontent.com/OliverCollins/Oxford-3000-Word-List/master/Oxford%203000%20Word%20List.txt',
        },
      },
    ],
  }],
  2: [{
    name: 'log',
    options: { keyPath: 'date', autoIncrement: false },
    indexes: [
      { name: 'date', keyPath: 'date', option: { unique: true } },
      { name: 'key', keyPath: 'key', option: { unique: false } },
      { name: 'status', keyPath: 'status', option: { unique: false } },
    ],
    fixture: [],
  }],
  3: [{
    name: 'env',
    options: { keyPath: 'key', autoIncrement: false },
    indexes: [
      { name: 'key', keyPath: 'key', option: { unique: true } },
    ],
    fixture: [
      { key: 'isAuthorized', value: 'false' },
      { key: 'user', value: {} },
      { key: 'gitHub', value: {
          url: 'https://github.com/login/oauth/authorize',
          client_id: 'a08c8e7509caa2da1f2a',
          redirect_uri: 'https://flash-card.github.io/fc-pwa/#/auth-cb',
          scope: 'gist',
          state: '1234',
          allow_signup: true,
        },
      },
    ],
  }],
};
