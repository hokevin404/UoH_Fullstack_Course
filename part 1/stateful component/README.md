  #Stateful Component
  
  The function call adds state to the component 
  and renders it initialized with the value of 
  zero. The function returns an array that 
  contains two items. We assign the items to 
  the variables 'counter' and 'setCounter' by 
  using the destructuring assignment syntax. 

  The 'counter' variable is assigned the initial 
  value of state which is zero. The variable 
  'setCounter' is assigned to a function that 
  will be used to modify the state.

  The application calls the setTimeout function 
  and passes it two parameters: a function to 
  increment the counter state and a timeout of 
  one second.

  If the component doesn't render when you think 
  it should, or if it renders at the "wrong time", 
  you can debug the application by logging the 
  values of the component's variables to the 
  console by using 'console.log()'. 