/* Derectives */
phpybdb.directive("page", function($compile) {
    return {
        restrict: "E",
        scope: {family: '='},
        template: listTpl,
        compile: function(tElement, tAttr) {
            var contents = tElement.contents().remove();
            var compiledContents;
            return function(scope, iElement, iAttr) {
                if(!compiledContents) {
                    compiledContents = $compile(contents);
                }
                compiledContents(scope, function(clone, scope) {
                         iElement.append(clone); 
                });
            };
        }
    };
});