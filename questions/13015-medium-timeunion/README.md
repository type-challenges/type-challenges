Generator a union that can suport time format type

  For example, the function component named 'timePicker' with time params like value、onChange. we need a union type like
   `'YYYY-MM-DD HH:mm:ss'|'YYYY-MM-DD'|'HH:mm:ss'|'YYYY-MM HH:ss'|...` not `string`, but can be `""`
