var budgetController = (function() {
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Expense = function(id, description, value, percentage) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = percentage;
    }

    Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome > 0){
            this.percentage = Math.round((this.value/totalIncome) * 100);
        }
        else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };

})();



var UIcontroller = (function() {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription:'.add__description',
        inputValue: '.add__value',
        addBtn: '.add__btn',
        deleteBtn: '.item__delete--btn'

    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType),
                description: document.querySelector(DOMstrings.inputDescription),
                value: document.querySelector(DOMstrings.inputValue)
            };
        },

        getDOMstrings: function() {
            return DOMstrings;
        }

    };
})();

var controller = (function(budgetCtrl, UIctrl) {

    var setUpEventListeners = function() {
        var DOM = UIctrl.getDOMstrings;
        document.querySelector(DOM.addBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', e => {
            if (e.keycode == 13 || e.which == 13) {
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.deleteBtn).addEventListener('click', ctrlDeleteItem);
    }
    
    var ctrlAddItem = function() {

    }
    
})(budgetController,UIcontroller);