(function () {
  "use strict"

  let app = angular.module('app', [])
  
  const notify = (x) => {
    new Notification('Dados atualizados', {
      body: 'Primeiro nome: ' + x
    })
  }

  app.controller('ListCtrl', function ($http) {
    let vm = this

    vm.list = [
      { name: "João", lastname: "Silva", age: "30", city: "Rio de Janeiro" }
    ]

    vm.getList = () => {
      $http.get('data.json').then((response) => {
        response.data.forEach((item) => vm.list.push(item))
        
        notify(response.data[0].name)
      })
    }
  })
})()