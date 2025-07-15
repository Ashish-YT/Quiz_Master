const cppQuestions = [
  {
    question: "Which of the following is used for comments in C++?",
    options: ["// comment", "# comment", "<!-- comment -->", "/* comment */"],
    answer: "// comment",
  },
  {
    question: "Who developed C++?",
    options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Ken Thompson"],
    answer: "Bjarne Stroustrup",
  },
  {
    question: "What is the correct syntax of including a user-defined header file?",
    options: ['#include "filename.h"', '#include <filename.h>', '#include [filename]', '#include {filename}'],
    answer: '#include "filename.h"',
  },
  {
    question: "Which concept allows the same function name to be used for different purposes?",
    options: ["Inheritance", "Overloading", "Encapsulation", "Abstraction"],
    answer: "Overloading",
  },
  {
    question: "Which operator is used to resolve the scope of a class member?",
    options: ["::", ".", "->", ":"],
    answer: "::",
  },
  {
    question: "Which of the following is not a basic data type in C++?",
    options: ["int", "float", "real", "char"],
    answer: "real",
  },
  {
    question: "Which keyword is used to define a class in C++?",
    options: ["function", "def", "class", "struct"],
    answer: "class",
  },
  {
    question: "What is the size of `int` in C++ (on most compilers)?",
    options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"],
    answer: "4 bytes",
  },
  {
    question: "Which function is the entry point of any C++ program?",
    options: ["start()", "main()", "init()", "program()"],
    answer: "main()",
  },
  {
    question: "What is the correct way to declare a pointer?",
    options: ["int *ptr;", "pointer int ptr;", "int ptr*;", "ptr int*;"],
    answer: "int *ptr;",
  },
  {
    question: "Which keyword is used to inherit a class?",
    options: ["extends", "inherits", "base", "public"],
    answer: "public",
  },
  {
    question: "What is function overloading?",
    options: [
      "Two functions with same name and different parameters",
      "Two functions with different names",
      "Multiple functions with same return type",
      "Functions calling other functions",
    ],
    answer: "Two functions with same name and different parameters",
  },
  {
    question: "What is the output of `cout << 4 + 2 * 3;`?",
    options: ["18", "10", "12", "24"],
    answer: "10",
  },
  {
    question: "Which of these supports polymorphism?",
    options: ["Overloading", "Inheritance", "Encapsulation", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which operator is overloaded for object output?",
    options: ["<<", ">>", "()", "="],
    answer: "<<",
  },
  {
    question: "Which keyword is used to create a constant?",
    options: ["const", "static", "final", "immutable"],
    answer: "const",
  },
  {
    question: "Which one is a correct destructor declaration?",
    options: ["~ClassName()", "destructor ClassName()", "delete ClassName()", "ClassName~()"],
    answer: "~ClassName()",
  },
  {
    question: "Which header file is required for using `cout` and `cin`?",
    options: ["<stdio.h>", "<iostream>", "<conio.h>", "<stdlib.h>"],
    answer: "<iostream>",
  },
  {
    question: "What does STL stand for?",
    options: ["Standard Template Library", "System Type Library", "Structure Type List", "Simple Template List"],
    answer: "Standard Template Library",
  },
  {
    question: "Which of the following is used to handle errors in C++?",
    options: ["throw", "try", "catch", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What is the full form of OOP?",
    options: ["Object Oriented Programming", "Operational Output Program", "Open Object Protocol", "Object Over Process"],
    answer: "Object Oriented Programming",
  },
  {
    question: "Which container stores elements in key-value pairs?",
    options: ["map", "vector", "list", "stack"],
    answer: "map",
  },
  {
    question: "Which keyword is used to allocate memory dynamically in C++?",
    options: ["new", "malloc", "create", "alloc"],
    answer: "new",
  },
  {
    question: "Which of the following is not part of the OOP concept?",
    options: ["Encapsulation", "Abstraction", "Polymorphism", "Compilation"],
    answer: "Compilation",
  },
  {
    question: "Which keyword is used to prevent inheritance?",
    options: ["final", "sealed", "stop", "restrict"],
    answer: "final",
  },
  {
    question: "Which data structure does STL 'vector' represent?",
    options: ["Dynamic array", "Linked list", "Queue", "Stack"],
    answer: "Dynamic array",
  },
  {
    question: "Which of the following is not a loop in C++?",
    options: ["do-while", "for", "while", "loop-until"],
    answer: "loop-until",
  },
  {
    question: "Which class allows operations at both ends in STL?",
    options: ["queue", "stack", "deque", "list"],
    answer: "deque",
  },
  {
    question: "What is the result of `9 % 4`?",
    options: ["2", "1", "0", "3"],
    answer: "1",
  },
  {
    question: "Which function is used to allocate memory in C++?",
    options: ["new", "malloc", "alloc", "create"],
    answer: "new",
  },
  {
    question: "Which of these access specifiers is the most restrictive?",
    options: ["private", "protected", "public", "external"],
    answer: "private",
  },
  {
    question: "Which operator is used to access members of a pointer object?",
    options: ["->", ".", "::", "*"],
    answer: "->",
  },
  {
    question: "Which keyword is used to create an abstract class?",
    options: ["virtual", "pure", "abstract", "interface"],
    answer: "virtual",
  },
  {
    question: "Which of the following is not a valid storage class?",
    options: ["auto", "static", "mutable", "register"],
    answer: "mutable",
  },
  {
    question: "How do you define a template function?",
    options: ["template <typename T>", "template function()", "define template()", "function <T>()"],
    answer: "template <typename T>",
  },
  {
    question: "Which STL container maintains a sorted sequence?",
    options: ["set", "vector", "stack", "queue"],
    answer: "set",
  },
  {
    question: "Which of these cannot be overloaded?",
    options: ["==", "()", "?:", "[]"],
    answer: "?:",
  },
  {
    question: "Which keyword is used to prevent modification?",
    options: ["const", "static", "final", "readonly"],
    answer: "const",
  },
  {
    question: "Which concept binds code and data together?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    answer: "Encapsulation",
  },
  {
    question: "What does `cin` represent?",
    options: ["Standard input", "Standard output", "File input", "Console output"],
    answer: "Standard input",
  },
  {
    question: "What is the return type of `main()` in C++?",
    options: ["void", "int", "char", "string"],
    answer: "int",
  },
  {
    question: "What is the use of `this` pointer?",
    options: ["Refers to current object", "Refers to base class", "Refers to parent", "None"],
    answer: "Refers to current object",
  },
  {
    question: "Which method is used to release memory allocated by new?",
    options: ["delete", "remove", "free", "destroy"],
    answer: "delete",
  },
  {
    question: "Which container follows LIFO?",
    options: ["stack", "queue", "deque", "list"],
    answer: "stack",
  },
  {
    question: "What is the use of `friend` function?",
    options: ["Access private members", "Change class name", "Delete object", "Create template"],
    answer: "Access private members",
  },
  {
    question: "Which of the following supports multiple inheritance?",
    options: ["C++", "Java", "Python", "C#"],
    answer: "C++",
  },
  {
    question: "Which container is best for key-value search?",
    options: ["map", "stack", "queue", "vector"],
    answer: "map",
  },
  {
    question: "What does `endl` do?",
    options: ["Adds newline", "Ends file", "Stops loop", "Clears screen"],
    answer: "Adds newline",
  },
  {
    question: "Which of the following is a preprocessor directive?",
    options: ["#include", "main()", "int a;", "return 0;"],
    answer: "#include",
  },
  {
    question: "Which access specifier allows class members to be inherited but not accessed?",
    options: ["protected", "private", "public", "internal"],
    answer: "protected",
  },
];

export default cppQuestions;