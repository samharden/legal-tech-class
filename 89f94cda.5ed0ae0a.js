(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(1),s=a(6),i=(a(0),a(157)),o={id:"2020-law-smart-machines-assignment-2",title:"Object Oriented Programming",sidebar_label:"Assignment 2"},r={id:"classes/2020-law-smart-machines-assignment-2",title:"Object Oriented Programming",description:"## Overview of Classes",source:"@site/docs/classes/assignment-oop.md",permalink:"/docassemble-class/docs/classes/2020-law-smart-machines-assignment-2",editUrl:"https://github.com/nonprofittechy/docassemble-class/edit/master/open-class/docs/classes/assignment-oop.md",sidebar_label:"Assignment 2",sidebar:"someSidebar",previous:{title:"Assignment 1",permalink:"/docassemble-class/docs/classes/2020-law-smart-machines-assignment-1"},next:{title:"The YAML file Format",permalink:"/docassemble-class/docs/yaml"}},l=[{value:"Overview of Classes",id:"overview-of-classes",children:[{value:"Class methods",id:"class-methods",children:[]},{value:"Inheritance",id:"inheritance",children:[]},{value:"Object conventions and syntax",id:"object-conventions-and-syntax",children:[]},{value:"Special class constructor methods <code>__init__()</code> and <code>init()</code>",id:"special-class-constructor-methods-__init__-and-init",children:[]},{value:"Special method <code>__str__()</code>",id:"special-method-__str__",children:[]}]},{value:"Classes in Docassemble",id:"classes-in-docassemble",children:[{value:"How Docassemble classes differ",id:"how-docassemble-classes-differ",children:[]},{value:"Using an object inside Docassemble",id:"using-an-object-inside-docassemble",children:[]},{value:"Docassemble's built-in objects",id:"docassembles-built-in-objects",children:[]}]},{value:"Assignment",id:"assignment",children:[{value:"Describe a Python class for a law school class",id:"describe-a-python-class-for-a-law-school-class",children:[]},{value:"Alter the interview below so that it leverages Docassemble built-in classes and methods",id:"alter-the-interview-below-so-that-it-leverages-docassemble-built-in-classes-and-methods",children:[]}]},{value:"Turn in your work",id:"turn-in-your-work",children:[]}],c={rightToc:l};function b(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview-of-classes"},"Overview of Classes"),Object(i.b)("p",null,"Objects are a special type of variable. Instead of holding one piece of information, they can hold several at once. For example, the variable ",Object(i.b)("inlineCode",{parentName:"p"},"x")," can easily represent the number ",Object(i.b)("inlineCode",{parentName:"p"},"10"),". But what if you wanted a variable to refer to, for example, an apple? You might want to store several pieces of information about the apple at once. Perhaps you want to know its weight, color, and variety."),Object(i.b)("p",null,"You could store the information in several variables, like this:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"apple_weight")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"apple_color")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"apple_variety"))),Object(i.b)("p",null,"Suppose you need to keep track of 10 different apples. Now you have:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"apple2_weight")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"apple2_color")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"apple2_variety"),"\n... and so on")),Object(i.b)("p",null,"This can quickly become hard to manage. What's more, each time you make a new variable to represent an apple, you introduce the risk of making a mistake."),Object(i.b)("p",null,"In object-oriented programming, you can more easily keep track of your variables by writing a kind of blueprint, or ",Object(i.b)("inlineCode",{parentName:"p"},"class definition")," that lets you group the related variables together. Once it's part of an object like, this, we call the individual variables ",Object(i.b)("inlineCode",{parentName:"p"},"attributes"),". An ",Object(i.b)("inlineCode",{parentName:"p"},"object")," is an ",Object(i.b)("inlineCode",{parentName:"p"},"instance")," of a ",Object(i.b)("inlineCode",{parentName:"p"},"Class")," with one or more of those attributes filled-in with specific values. "),Object(i.b)("p",null,"Here is a diagram that represents the ",Object(i.b)("inlineCode",{parentName:"p"},"Apple")," class:"),Object(i.b)("div",{className:"mermaid"},"\n  classDiagram\nclass Apple {\n  weight: float\n  color: str\n  variety: str\n}\n"),Object(i.b)("p",null,"We list the ",Object(i.b)("em",{parentName:"p"},"type")," of each variable after its name in this diagram. There's no reason that an object could not itself be composed of different objects."),Object(i.b)("h3",{id:"class-methods"},"Class methods"),Object(i.b)("p",null,"Something special about ",Object(i.b)("inlineCode",{parentName:"p"},"objects")," is that you can also group ",Object(i.b)("inlineCode",{parentName:"p"},"methods")," with the object definition. A ",Object(i.b)("inlineCode",{parentName:"p"},"method")," is a function that is part of a class definition. Methods are used to describe dynamic aspects of an object; to compose various attributes; or to act on data in relation to the attributes of the object. For example, an apple might have a method ",Object(i.b)("inlineCode",{parentName:"p"},"is_ripe()")," that uses the ",Object(i.b)("inlineCode",{parentName:"p"},"planted_date")," and today's date to tell you if the apple is ready to be picked."),Object(i.b)("p",null,"Here's the updated diagram that shows the ",Object(i.b)("inlineCode",{parentName:"p"},"is_ripe()")," method:"),Object(i.b)("div",{className:"mermaid"},"\n  classDiagram\n  class Apple {\n    weight\n    color\n    variety\n    is_ripe()\n  }\n"),Object(i.b)("h3",{id:"inheritance"},"Inheritance"),Object(i.b)("p",null,"A useful aspect of classes is that one class can rely on, or inherit, the definition of a different class. We call the more generic class the ",Object(i.b)("inlineCode",{parentName:"p"},"parent")," and the more specific class the ",Object(i.b)("inlineCode",{parentName:"p"},"child")," or ",Object(i.b)("inlineCode",{parentName:"p"},"sub-class"),". Below, the ",Object(i.b)("inlineCode",{parentName:"p"},"Apple")," class inherits from the more generic ",Object(i.b)("inlineCode",{parentName:"p"},"fruit")," class. It has its own ",Object(i.b)("inlineCode",{parentName:"p"},"is_ripe()")," method, because different kinds of fruit ripen at different times. But it can use all of the same attributes as the original Fruit class."),Object(i.b)("div",{className:"mermaid"},"\n  classDiagram\nclass Apple {\n  is_ripe(): bool\n}\n\nApple <|-- Fruit\n\nclass Fruit {\n  weight: float\n  color: str\n  variety: str\n  is_ripe(): bool  \n}\n"),Object(i.b)("p",null,"One benefit of inheritance is reducing the code you need to write. But inheritance also allows you to write your own very specific class, such as ",Object(i.b)("inlineCode",{parentName:"p"},"Macoun")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Cortland"),", without having to update any functions in your program that might expect to work on every kind of ",Object(i.b)("inlineCode",{parentName:"p"},"Apple")," or even ",Object(i.b)("inlineCode",{parentName:"p"},"Fruit"),"."),Object(i.b)("h3",{id:"object-conventions-and-syntax"},"Object conventions and syntax"),Object(i.b)("p",null,"Class names in Python almost always begin with a capital letter. If they are composed of multiple words, each word is capitalized, and there are no spaces or underscores. (this style is called CamelCase). When you create an object that is an instance of a class, you should use normal Pythonic style of lower case names with _ separating each word. This is not enforced, but helps someone else who reads your code."),Object(i.b)("p",null,"You can interact with an object's attributes by using ",Object(i.b)("inlineCode",{parentName:"p"},".")," ",Object(i.b)("inlineCode",{parentName:"p"},"dot notation"),". This simply means the name of the attribute comes after the object's name, separated by a ",Object(i.b)("inlineCode",{parentName:"p"},"."),". For example: ",Object(i.b)("inlineCode",{parentName:"p"},"my_apple.weight = 100.7"),"."),Object(i.b)("p",null,"Methods also use dot notation. Like functions, you call a method with two parentheses after the method's name: ",Object(i.b)("inlineCode",{parentName:"p"},"apple.is_ripe()"),", optionally with one or more parameters. ",Object(i.b)("inlineCode",{parentName:"p"},'apple.nutritional_value("human")'),"."),Object(i.b)("h3",{id:"special-class-constructor-methods-__init__-and-init"},"Special class constructor methods ",Object(i.b)("inlineCode",{parentName:"h3"},"__init__()")," and ",Object(i.b)("inlineCode",{parentName:"h3"},"init()")),Object(i.b)("p",null,"Python Classes expect to see a special method, named ",Object(i.b)("inlineCode",{parentName:"p"},"__init__"),". This is called the class constructor. Docassemble objects should never replace this method. Instead, you will use the method ",Object(i.b)("inlineCode",{parentName:"p"},"init()")),Object(i.b)("h3",{id:"special-method-__str__"},"Special method ",Object(i.b)("inlineCode",{parentName:"h3"},"__str__()")),Object(i.b)("p",null,"Objects have a special built-in method that they expect to see, named ",Object(i.b)("inlineCode",{parentName:"p"},"__str__"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"__str__")," method will return a string (text) representation of the object. This is very useful for use inside Docassemble, as we often display information on the screen. For example, the standard string representation of a person is: person.name.first + person.name.middle + person.name. Using the ",Object(i.b)("inlineCode",{parentName:"p"},"__str__")," method allows you to just mention the person object without having to write out first name, last name, etc."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown"}),"${user}\n")),Object(i.b)("p",null,"Would print out ",Object(i.b)("inlineCode",{parentName:"p"},"Quinten Steenhuis")," if ",Object(i.b)("inlineCode",{parentName:"p"},"user.name.first")," is Quinten and ",Object(i.b)("inlineCode",{parentName:"p"},"user.name.last")," is Steenhuis."),Object(i.b)("h2",{id:"classes-in-docassemble"},"Classes in Docassemble"),Object(i.b)("p",null,"OK. So far, we learned that an object is a type of variable that can store different, related information in one place. You may not create your own classes for some time. However, this background is helpful for making use of Docassemble's built-in helper classes, methods, and functions that expect to work on a built-in class."),Object(i.b)("h3",{id:"how-docassemble-classes-differ"},"How Docassemble classes differ"),Object(i.b)("p",null,"In order to work with Docassemble, every object should inherit from the ",Object(i.b)("inlineCode",{parentName:"p"},"DAObject")," class."),Object(i.b)("p",null,"You may have seen that in most class definitions, you typically list all of the attributes when you create the class. In Docassemble, missing variable definitions are needed to trigger a question being asked. So, instead, you will normally leave those attributes undefined at the class definition time. You can include a comment that lists all of the attributes, and also make use of those attributes inside methods."),Object(i.b)("p",null,"Docassemble objects also expect to know their own name, stored as a special attribute ",Object(i.b)("inlineCode",{parentName:"p"},"instanceName"),". It is very easy to get confused with this aspect of Docassemble. However: when you stick with the most common uses of classes, you won't really have to think about this."),Object(i.b)("h3",{id:"using-an-object-inside-docassemble"},"Using an object inside Docassemble"),Object(i.b)("h4",{id:"the-modules-block"},"The ",Object(i.b)("inlineCode",{parentName:"h4"},"modules")," block"),Object(i.b)("p",null,"If you write your own ",Object(i.b)("inlineCode",{parentName:"p"},"Class"),", you need to tell Docassemble that you plan to use it with a modules block:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"---\nmodules:\n  - module_from_other_package\n  - .module_in_this_package\n")),Object(i.b)("h4",{id:"the-objects-block"},"The ",Object(i.b)("inlineCode",{parentName:"h4"},"objects")," block"),Object(i.b)("p",null,"You create an ",Object(i.b)("inlineCode",{parentName:"p"},"instance")," of an object and assign its name with the ",Object(i.b)("inlineCode",{parentName:"p"},"objects")," block:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"---\nobjects:\n  - user: Individual\n")),Object(i.b)("p",null,"Optionally, you can use the special method ",Object(i.b)("inlineCode",{parentName:"p"},".using()")," to pass arguments to the class constructor. This is an advanced topic."),Object(i.b)("h4",{id:"working-with-the-object-as-a-variable"},"Working with the object as a variable"),Object(i.b)("p",null,"Treat object ",Object(i.b)("inlineCode",{parentName:"p"},"attributes")," just like ordinary variables. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"---\nquestion: |\n  Your birthday\nfields:\n  - Enter date: user.birthdate\n    datatype: date\n")),Object(i.b)("p",null,"Be careful when treating the ",Object(i.b)("inlineCode",{parentName:"p"},"object")," itself as a variable. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"user = other_user\n")),Object(i.b)("p",null,"Is valid Python. It creates a new ",Object(i.b)("em",{parentName:"p"},"variable")," named ",Object(i.b)("inlineCode",{parentName:"p"},"user")," that points to the existing object, ",Object(i.b)("inlineCode",{parentName:"p"},"other_user"),". But this can cause trouble, because Docassemble objects keep track of their own name as an attribute. When Docassemble is searching for a question that defines the value of ",Object(i.b)("inlineCode",{parentName:"p"},"user"),", instead it will try to find a question that defines the value of ",Object(i.b)("inlineCode",{parentName:"p"},"other_user"),"."),Object(i.b)("h3",{id:"docassembles-built-in-objects"},"Docassemble's built-in objects"),Object(i.b)("p",null,"Docassemble has a large number of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docassemble.org/docs/objects.html#stdclasses"}),"built-in Classes"),", as well as optional Classes designed to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docassemble.org/docs/legal.html#tocAnchor-1-2"}),"simplify legal matters"),". Many of these are utility classes that help write an interview in a more abstract way, but don't represent real-world objects."),Object(i.b)("p",null,"You will most likely use these few classes representing things in the physical world again and again:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docassemble.org/docs/objects.html#Person"}),Object(i.b)("inlineCode",{parentName:"a"},"Person")),", representing a legal Person that does not need to be an individual (e.g., it could be a corporation)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docassemble.org/docs/objects.html#Individual"}),Object(i.b)("inlineCode",{parentName:"a"},"Individual")),", representing an individual person"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docassemble.org/docs/objects.html#Name"}),Object(i.b)("inlineCode",{parentName:"a"},"Name"))," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docassemble.org/docs/,objects.html#IndividualName"}),Object(i.b)("inlineCode",{parentName:"a"},"IndividualName")),", representing a name"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docassemble.org/docs/objects.html#Address"}),Object(i.b)("inlineCode",{parentName:"a"},"Address")),", representing an address in the real-world, together with its different components (street, longitude/latitude, etc).")),Object(i.b)("p",null,"They are used throughout Docassemble. Several built-in functions also expect these objects as parameters."),Object(i.b)("p",null,"The third party Income class is also useful for working with financial information:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/GBLS/docassemble-income"}),Object(i.b)("inlineCode",{parentName:"a"},"Income")))),Object(i.b)("p",null,"It has several advantages over the Docassemble built-in Classes to represent income information."),Object(i.b)("p",null,"You may define your own objects as ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docassemble.org/docs/objects.html#DAObject"}),Object(i.b)("inlineCode",{parentName:"a"},"DAObject")),"s and benefit from the neater method of organizing related attributes in one variable, without needing to write your own class definition. "),Object(i.b)("p",null,"You will also often work with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docassemble.org/docs/groups.html#gather%20list"}),Object(i.b)("inlineCode",{parentName:"a"},"DAList"))," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docassemble.org/docs/groups.html#gather%20dictionary"}),Object(i.b)("inlineCode",{parentName:"a"},"DADict"))," objects, which allow you to gather repeated information."),Object(i.b)("h2",{id:"assignment"},"Assignment"),Object(i.b)("p",null,"The purpose of this assignment is to get you comfortable using Docassemble objects inside your own code. You will write much more ",Object(i.b)("em",{parentName:"p"},"idiomatic")," and neatly written code when you use these patterns. You don't necessarily need to understand the full theory of object-oriented programming to do this, but a little background helps."),Object(i.b)("h3",{id:"describe-a-python-class-for-a-law-school-class"},"Describe a Python class for a law school class"),Object(i.b)("p",null,"Think of a generic class offering in a law school setting, and how you would describe it in computer code that might be used\nto create a course catalog and to help students decide to sign up for it."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"What attributes would your class have? Consider aspects such as course title, location, etc."),Object(i.b)("li",{parentName:"ol"},"What methods would be appropriate to include?"),Object(i.b)("li",{parentName:"ol"},"What would the class's ",Object(i.b)("inlineCode",{parentName:"li"},"str")," method look like? (Using pseudocode is fine)")),Object(i.b)("p",null,"Write out a class definition. You do not need to use Python syntax. You can use a formal UML specification, or just a Word document that lists the class name, lists the attributes, and lists the methods of the class under separate headings. Explain why you have chosen the attributes and methods you included."),Object(i.b)("h4",{id:"stretch-goal"},"Stretch goal:"),Object(i.b)("p",null,"Try creating a UML diagram for your class like the ones in the Object Oriented Programming section of this documentation. You might use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.draw.io/"}),"Draw.io"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://creately.com/"}),"Creately"),", or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/"}),"Mermaid.js"),"."),Object(i.b)("p",null,"Here's a Mermaid.js diagram for the Apple class we discussed earlier:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"classDiagram\nclass Apple {\n  is_ripe(): bool\n}\n\nApple <|-- Fruit\n\nclass Fruit {\n  weight: float\n  color: str\n  variety: str\n  is_ripe(): bool  \n}\n")),Object(i.b)("h3",{id:"alter-the-interview-below-so-that-it-leverages-docassemble-built-in-classes-and-methods"},"Alter the interview below so that it leverages Docassemble built-in classes and methods"),Object(i.b)("p",null,"Make use of the:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Individual")," class: ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docassemble.org/docs/objects.html#Individual"}),"https://docassemble.org/docs/objects.html#Individual")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Address")," class: ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docassemble.org/docs/objects.html#Address"}),"https://docassemble.org/docs/objects.html#Address"))),Object(i.b)("p",null,"Remember that an ",Object(i.b)("inlineCode",{parentName:"p"},"Individual")," object has a built-in method to display a text representation of itself."),Object(i.b)("p",null,"Turn on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docassemble.org/docs/fields.html#address%20autocomplete"}),"address autocompletion")," feature."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"---\nmandatory: True\ncode: |\n  welcome\n  user_name_first\n  user_address_street\n  display_results\n---\nquestion: |\n  Welcome to the interview\nfield: welcome\n---\nquestion: |\n  Your name\nfields:\n  - First name: user_name_first\n  - Last name: user_name_last\n---\nquestion: |\n  When were you born?\nfields:\n  - no label: user_birthdate\n---\nquestion: |\n  Your address\nfields:\n  - Street address: user_address_street\n  - Unit: user_address_unit\n  - City: user_address_city\n  - State: user_address_state\n  - Zip: user_address_zip\n---\ncomment: |\n  A template is a reusable block of Markdown+Mako text. This template will be used in both a question and a document you can download.\ntemplate: results\ncontent: |\n  # Results\n\n  Hello, ${user_name_first} ${user_name_last}.\n\n  You live at:\n\n  ${user_address_street}\n\n  ${user_address_city}, ${user_address_state} ${user_address_zip}\n\n  You are ${year_of(today()) - year_of(user_birthdate)} years old today.\n---\nevent: display_results\nquestion: |\n  Results\nsubquestion: |\n  ${results}\nattachments:\n  - Name: Your results\n    content: |\n      ${results}\n")),Object(i.b)("h2",{id:"turn-in-your-work"},"Turn in your work"),Object(i.b)("p",null,"Use Blackboard to turn in your work. You will need a link to your working interview, the actual YAML code, and your class definition either as a Word File, a UML diagram, or simply written out."))}b.isMDXComponent=!0},157:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),s=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=s.a.createContext({}),b=function(e){var t=s.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r({},t,{},e)),a},d=function(e){var t=b(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return a?s.a.createElement(m,r({ref:t},c,{components:a})):s.a.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var c=2;c<i;c++)o[c]=a[c];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);