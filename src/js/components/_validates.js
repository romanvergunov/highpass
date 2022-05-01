import JustValidate from 'just-validate';

const validate = new JustValidate('.contacts-right__form');

validate
  .addField('.contacts-right__name', [

    {
      rule: 'required',
      errorMessage: 'Введите ваше Имя',
    },

    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Поле должно содержать минимум 2 символа',
    },

    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Поле должно содержать максимум 30 символов',
    },

    {
      rule: 'customRegexp',
      value: '^[A-zА-яЁё]+$',
      errorMessage: 'Недопустимый формат',
    },
  ])

  .addField('.contacts-right__email', [
    {
      rule: 'required',
      errorMessage: 'Неккоректный E-mail',
    },

    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Поле должно содержать минимум 3 символа',
    },

    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Поле должно содержать максимум 30 символов',
    },
  ])

  .addField('.contacts-right__text', [

    {
      rule: 'required',
      errorMessage: 'Напишите комментарий',
    },

    {
      rule: 'minLength',
      value: 5,
      errorMessage: 'Поле должно содержать минимум 5 символов',
    },
    {
      rule: 'maxLength',
      value: 200,
      errorMessage: 'Поле должно содержать максимум 200 символов',
    },
    {
      rule: 'customRegexp',
      value: '^[A-zА-яЁё]+$',
      errorMessage: 'Недопустимый формат',
    },
  ]);

const validateTwo = new JustValidate('.right-about__form');

validateTwo
  .addField('.right-about__input', [
    {
      rule: 'required',
      errorMessage: 'Неккоректный E-mail',
    },

    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Поле должно содержать минимум 3 символа',
    },

    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Поле должно содержать максимум 30 символов',
    },
  ]);
