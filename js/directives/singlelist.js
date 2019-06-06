app.directive('singlelist',function(){
    return {
        restric: 'E',
        scope:{
            mylist: "="
        },
        templateUrl: 'js/directives/singlelist.html'
    }
})