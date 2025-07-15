const javaQuestions = [
  {
    question: "Who is known as the father of Java programming language?",
    options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"],
    answer: "James Gosling",
  },
  {
    question: "Which keyword is used to define a class in Java?",
    options: ["define", "class", "struct", "ClassDef"],
    answer: "class",
  },
  {
    question: "Which of these is not a Java primitive type?",
    options: ["int", "boolean", "char", "string"],
    answer: "string",
  },
  {
    question: "What is the size of an int in Java?",
    options: ["2 bytes", "4 bytes", "8 bytes", "Depends on system"],
    answer: "4 bytes",
  },
  {
    question: "Which method is the entry point of a Java program?",
    options: ["start()", "main()", "run()", "init()"],
    answer: "main()",
  },
  {
    question: "What does JVM stand for?",
    options: ["Java Variable Method", "Java Virtual Machine", "Java Verified Machine", "Java Version Method"],
    answer: "Java Virtual Machine",
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    options: ["this", "extends", "implements", "inherits"],
    answer: "extends",
  },
  {
    question: "Which of the following is not a Java access modifier?",
    options: ["private", "protected", "public", "sealed"],
    answer: "sealed",
  },
  {
    question: "Which keyword is used to prevent method overriding?",
    options: ["static", "final", "const", "private"],
    answer: "final",
  },
  {
    question: "Which interface must be implemented by a Java class to create a thread?",
    options: ["Runnable", "Threadable", "RunnableThread", "Thread"],
    answer: "Runnable",
  },
  {
    question: "Which collection class allows you to grow or shrink its size and provides indexed access to its elements?",
    options: ["Array", "ArrayList", "HashMap", "TreeSet"],
    answer: "ArrayList",
  },
  {
    question: "Which operator is used for object reference comparison?",
    options: ["==", "equals()", "!=", "!"],
    answer: "==",
  },
  {
    question: "Which of the following is a valid declaration of a package in Java?",
    options: ["package java.util;", "import java.util.*;", "package: java.util;", "include java.util;"],
    answer: "package java.util;",
  },
  {
    question: "Which exception is thrown when dividing by zero in Java?",
    options: ["NullPointerException", "ArithmeticException", "NumberFormatException", "IllegalArgumentException"],
    answer: "ArithmeticException",
  },
  {
    question: "Which class is the superclass of all classes in Java?",
    options: ["Object", "String", "Class", "Main"],
    answer: "Object",
  },
  {
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do-while", "foreach"],
    answer: "do-while",
  },
  {
    question: "What is the default value of a boolean variable in Java?",
    options: ["true", "false", "0", "null"],
    answer: "false",
  },
  {
    question: "Which class is used to handle events in Java AWT?",
    options: ["ActionEvent", "EventObject", "AWTEvent", "EventHandler"],
    answer: "ActionEvent",
  },
  {
    question: "Which keyword is used to import a package in Java?",
    options: ["include", "import", "package", "require"],
    answer: "import",
  },
  {
    question: "What is bytecode in Java?",
    options: ["Machine code", "Intermediate code", "Source code", "Assembly code"],
    answer: "Intermediate code",
  },
  {
    question: "What is the extension of compiled Java classes?",
    options: [".java", ".class", ".exe", ".javac"],
    answer: ".class",
  },
  {
    question: "Which method must be implemented by all threads?",
    options: ["start()", "run()", "stop()", "init()"],
    answer: "run()",
  },
  {
    question: "What is the use of 'this' keyword in Java?",
    options: ["Refers to current object", "Used for inheritance", "Calls superclass", "Creates an object"],
    answer: "Refers to current object",
  },
  {
    question: "Which keyword is used for exception handling?",
    options: ["try", "catch", "throw", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which method is used to start a thread in Java?",
    options: ["run()", "start()", "execute()", "launch()"],
    answer: "start()",
  },
  {
    question: "What is the size of a byte variable in Java?",
    options: ["4 bits", "8 bits", "16 bits", "32 bits"],
    answer: "8 bits",
  },
  {
    question: "Which collection class does not allow duplicates?",
    options: ["List", "Set", "Map", "ArrayList"],
    answer: "Set",
  },
  {
    question: "Which of these is a wrapper class in Java?",
    options: ["Integer", "int", "float", "char"],
    answer: "Integer",
  },
  {
    question: "Which of the following is used to find and fix bugs in Java programs?",
    options: ["JVM", "JRE", "JDK", "JDB"],
    answer: "JDB",
  },
  {
    question: "Which method can be used to convert a string to an integer?",
    options: ["parseInt()", "intValue()", "Integer()", "valueOf()"],
    answer: "parseInt()",
  },
  {
    question: "Which of the following is a checked exception?",
    options: ["NullPointerException", "IOException", "ArithmeticException", "IllegalArgumentException"],
    answer: "IOException",
  },
  {
    question: "Which of the following is not an OOP principle?",
    options: ["Encapsulation", "Abstraction", "Compilation", "Polymorphism"],
    answer: "Compilation",
  },
  {
    question: "Which method is used to find the length of a string?",
    options: ["length()", "size()", "getLength()", "len()"],
    answer: "length()",
  },
  {
    question: "Which of these is not a loop in Java?",
    options: ["for", "while", "repeat", "do-while"],
    answer: "repeat",
  },
  {
    question: "Which operator is used to compare two values?",
    options: ["=", "==", "!=", "<="],
    answer: "==",
  },
  {
    question: "Which of these is not a Java keyword?",
    options: ["static", "Boolean", "void", "private"],
    answer: "Boolean",
  },
  {
    question: "Which package contains Scanner class?",
    options: ["java.io", "java.util", "java.net", "java.lang"],
    answer: "java.util",
  },
  {
    question: "Which method is called when an object is created?",
    options: ["constructor", "main", "create", "start"],
    answer: "constructor",
  },
  {
    question: "Which class is used for file handling in Java?",
    options: ["FileInput", "FileWriter", "File", "Stream"],
    answer: "File",
  },
  {
    question: "What is the use of super keyword in Java?",
    options: ["Refers to parent class", "Refers to current object", "Used to call constructor", "None"],
    answer: "Refers to parent class",
  },
  {
    question: "Which symbol is used for single-line comments in Java?",
    options: ["//", "#", "<!-- -->", "/* */"],
    answer: "//",
  },
  {
    question: "Which of these is a thread-safe collection?",
    options: ["Vector", "ArrayList", "HashMap", "LinkedList"],
    answer: "Vector",
  },
  {
    question: "What does the final keyword mean when applied to a variable?",
    options: ["Variable is constant", "Variable is private", "Variable is public", "Variable is static"],
    answer: "Variable is constant",
  },
  {
    question: "Which keyword is used to define a constant in Java?",
    options: ["const", "static", "final", "constant"],
    answer: "final",
  },
  {
    question: "Which operator is used for logical AND?",
    options: ["&", "&&", "|", "||"],
    answer: "&&",
  },
  {
    question: "What is the base class of all exceptions in Java?",
    options: ["Throwable", "Error", "Exception", "Object"],
    answer: "Throwable",
  },
  {
    question: "What is garbage collection in Java?",
    options: ["Deleting unused objects", "Cleaning files", "Removing threads", "Freeing memory manually"],
    answer: "Deleting unused objects",
  },
  {
    question: "Which keyword is used to stop a loop?",
    options: ["exit", "break", "stop", "return"],
    answer: "break",
  }
];

export default javaQuestions;
