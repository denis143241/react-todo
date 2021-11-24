import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/addTodo";

function App() {

  let allTodosArray = [
    {id: 1 , completed: false, title: 'Функция. Основные понятия. Основные характеристики функции.'},
    {id: 2 , completed: false, title: 'Числовые последовательности. Предел монотонной последовательности. Основная теорема о монотонных последовательностях.'},
    {id: 3 , completed: false, title: 'Предел функции. Основные теоремы о пределах функций.'},
    {id: 4 , completed: false, title: 'Замечательные пределы.'},
    {id: 5 , completed: false, title: 'Непрерывность функции.'},
    {id: 6 , completed: false, title: 'Свойства функций, непрерывных на отрезке..'},
    {id: 7 , completed: false, title: 'Производная. Геометрический, физический и экономический смысл производной. Теорема о непрерывности дифференцируемой функции.'},
    {id: 8 , completed: false, title: 'Теоремы о производной суммы, произведения и частного двух функций.'},
    {id: 9 , completed: false, title: 'Теоремы о производных сложной и обратной функций.'},
    {id: 10 , completed: false, title: 'Производные элементарных функций.'},
    {id: 11 , completed: false, title: 'Производные высших порядков.'},
    {id: 12 , completed: false, title: 'Дифференциал. Необходимое и достаточное условие дифференцируемости функции.'},
    {id: 13 , completed: false, title: 'Приближенные вычисления. Применение дифференциала при приближенных вычислениях.'},
    {id: 14 , completed: false, title: 'Теорема Ферма. Теорема Ролля. Теорема Лагранжа и ее геометрический смысл. Теорема Коши.'},
    {id: 15 , completed: false, title: 'Теоремы о дифференцируемых функциях на отрезке.'},
    {id: 16 , completed: false, title: 'Правило Лопиталя. Раскрытие неопределенностей различных видов.'},
    {id: 17 , completed: false, title: 'Исследование функций с помощью производной.'},
    {id: 18 , completed: false, title: 'Функции многих переменных. Область определения функций многих переменных. Линии уровня и поверхности уровня.'},
    {id: 19 , completed: false, title: 'Частные производные функций многих переменных. Дифференцируемость функции многих переменных.'},
    {id: 20 , completed: false, title: 'Производные высших порядков для функций многих переменных. Теорема о смешанных производных.'},
    {id: 21 , completed: false, title: 'Экстремум функций многих переменных.'},
    {id: 22 , completed: false, title: 'Определение первообразной функции, пример. Теорема о множестве первообразных. Понятие неопределенного интеграла.'},
    {id: 23 , completed: false, title: 'Свойства неопределенного интеграла. Непосредственное интегрирование.'},
    {id: 24 , completed: false, title: 'Метод подстановки и метод интегрирования по частям.'},
    {id: 25 , completed: false, title: 'Интегрирование рациональных функций. Определения рациональной дроби, правильной и неправильной.'},
    {id: 26 , completed: false, title: 'Правило интегрирования рациональной дроби.'},
    {id: 27 , completed: false, title: 'Задачи, приводящиеся к понятию определенного интеграла.'},
    {id: 28 , completed: false, title: 'Определение определенного интеграла. Геометрический смысл определенного интеграла.'},
    {id: 29 , completed: false, title: 'Свойства определенного интеграла.'},
    {id: 30 , completed: false, title: 'Формула Ньютона-Лейбница.'},
    {id: 31 , completed: false, title: 'Интегрирование по частям и метод подстановки в определенном интеграле.'},
    {id: 32 , completed: false, title: 'Определение обыкновенного дифференциального уравнения. Порядок уравнения. Решение, интегральная кривая.'},
    {id: 33 , completed: false, title: 'Задача Коши, начальные данные. Формулировка достаточных условий существования и единственности решения задачи Коши. Общее и частное решения дифференциального уравнения.'},
    {id: 34 , completed: false, title: 'Виды уравнений первого порядка.'},
    {id: 35 , completed: false, title: 'Простейшие типы уравнений высших порядков, допускающих понижение порядка.'},
    {id: 36 , completed: false, title: 'Линейные обыкновенные дифференциальные уравнения второго порядка.'},
    {id: 37 , completed: false, title: 'Общее решение неоднородного линейного обыкновенного дифференциального уравнения второго порядка. Методы решения.'}
  ]

  const [todos, setTodos] = React.useState(allTodosArray)

  function toggleTodo(id) {
      setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
      })
    )
  }
    
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={ {removeTodo }}>
      <div className='wrapper'>
        <AddTodo></AddTodo>
      {todos.length ? <TodoList array={todos} onToggle={toggleTodo}/> : <p className='elseList'>Все билеты выучены!<br/>Удачи на экзамене</p>}
  
      </div>
    </Context.Provider>
  );
}

export default App;

