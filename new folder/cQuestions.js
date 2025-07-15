const cQuestions = [
  {
    question: "What is the correct syntax to output 'Hello World' in C?",
    options: [
      'printf("Hello World");',
      "echo 'Hello World';",
      "cout << 'Hello World';",
      'Console.WriteLine("Hello World");',
    ],
    answer: 'printf("Hello World");',
  },
  {
    question: "Which header file is required for printf() function?",
    options: ["<conio.h>", "<string.h>", "<stdio.h>", "<stdlib.h>"],
    answer: "<stdio.h>",
  },
  {
    question: "What is the size of int on a 32-bit system?",
    options: ["2 bytes", "4 bytes", "8 bytes", "Depends on compiler"],
    answer: "4 bytes",
  },
  {
    question: "What is the default return type of a function in C?",
    options: ["void", "int", "float", "char"],
    answer: "int",
  },
  {
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do-while", "None"],
    answer: "do-while",
  },
  {
    question: "What is the format specifier for integer in C?",
    options: ["%d", "%f", "%c", "%s"],
    answer: "%d",
  },
  {
    question: "Which of the following is not a valid variable name in C?",
    options: ["_count", "count1", "1count", "count_1"],
    answer: "1count",
  },
  {
    question: "What will be the value of x after this code: int x = 5; x += 3;",
    options: ["8", "5", "3", "15"],
    answer: "8",
  },
  {
    question:
      "Which operator is used to access value at address stored in a pointer?",
    options: ["&", "*", "->", "%"],
    answer: "*",
  },
  {
    question: "Which keyword is used to prevent modification of a variable?",
    options: ["const", "static", "volatile", "extern"],
    answer: "const",
  },
  {
    question: "Which function is used to read a string in C?",
    options: ["scanf", "gets", "read", "input"],
    answer: "gets",
  },
  {
    question: "What is the extension of C source file?",
    options: [".c", ".cpp", ".cs", ".java"],
    answer: ".c",
  },
  {
    question: "What is the output of 5 / 2 in C?",
    options: ["2", "2.5", "3", "5"],
    answer: "2",
  },
  {
    question: "Which data type is used to store characters?",
    options: ["char", "int", "float", "double"],
    answer: "char",
  },
  {
    question: "What is the size of float in C?",
    options: ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"],
    answer: "4 bytes",
  },
  {
    question: "Which operator is used for logical AND?",
    options: ["&", "&&", "|", "||"],
    answer: "&&",
  },
  {
    question: "How to declare a constant pointer to an integer?",
    options: [
      "int *const ptr;",
      "const int *ptr;",
      "int const *ptr;",
      "const int const *ptr;",
    ],
    answer: "int *const ptr;",
  },
  {
    question: "What is the value of x in: int x = 10 % 3;",
    options: ["1", "3", "0", "2"],
    answer: "1",
  },
  {
    question: "Which function is used to allocate memory dynamically?",
    options: ["malloc()", "scanf()", "printf()", "sizeof()"],
    answer: "malloc()",
  },
  {
    question: "Which function is used to free allocated memory?",
    options: ["release()", "dealloc()", "free()", "delete()"],
    answer: "free()",
  },
  {
    question: "Which keyword is used to define a macro?",
    options: ["define", "#define", "macro", "#macro"],
    answer: "#define",
  },
  {
    question: "Which header file contains string functions?",
    options: ["<string.h>", "<stdlib.h>", "<stdio.h>", "<math.h>"],
    answer: "<string.h>",
  },
  {
    question: "Which keyword is used to return a value from function?",
    options: ["return", "break", "continue", "exit"],
    answer: "return",
  },
  {
    question: "Which format specifier is used for float?",
    options: ["%f", "%d", "%c", "%s"],
    answer: "%f",
  },
  {
    question: "Which of these is not a loop construct?",
    options: ["for", "foreach", "while", "do-while"],
    answer: "foreach",
  },
  {
    question: "Which function is used to write to a file?",
    options: ["fwrite()", "fread()", "fprintf()", "fput()"],
    answer: "fprintf()",
  },
  {
    question: "Which symbol is used to start a preprocessor directive?",
    options: ["#", "$", "!", "*"],
    answer: "#",
  },
  {
    question: "What is the use of break statement?",
    options: ["Exit a loop", "Restart a loop", "Skip one iteration", "None"],
    answer: "Exit a loop",
  },
  {
    question: "Which of the following is a ternary operator?",
    options: ["?:", "??", "::", "++"],
    answer: "?:",
  },
  {
    question: "Which operator is used for bitwise OR?",
    options: ["|", "||", "&", "^"],
    answer: "|",
  },
  {
    question: "Which header file is needed for malloc?",
    options: ["<stdlib.h>", "<malloc.h>", "<stdio.h>", "<memory.h>"],
    answer: "<stdlib.h>",
  },
  {
    question: "What is a pointer?",
    options: ["Variable holding address", "Function", "Integer", "Operator"],
    answer: "Variable holding address",
  },
  {
    question: "What does NULL represent?",
    options: ["Zero", "Undefined", "Empty pointer", "Nothing"],
    answer: "Empty pointer",
  },
  {
    question: "Which loop checks condition after executing?",
    options: ["do-while", "while", "for", "None"],
    answer: "do-while",
  },
  {
    question: "How to access structure members?",
    options: [". operator", ": operator", "$ operator", "@ operator"],
    answer: ". operator",
  },
  {
    question: "Which header file defines NULL?",
    options: ["<stddef.h>", "<stdio.h>", "<string.h>", "<conio.h>"],
    answer: "<stddef.h>",
  },
  {
    question: "Which function is used to copy strings?",
    options: ["strcpy()", "strcat()", "strlen()", "strcmp()"],
    answer: "strcpy()",
  },
  {
    question: "Which function compares two strings?",
    options: ["strcmp()", "strcat()", "strcpy()", "strlen()"],
    answer: "strcmp()",
  },
  {
    question: "Which function returns length of a string?",
    options: ["strlen()", "strcpy()", "strcat()", "strcmp()"],
    answer: "strlen()",
  },
  {
    question: "What is a function prototype?",
    options: ["Function declaration", "Function call", "Function body", "None"],
    answer: "Function declaration",
  },
  {
    question: "What is the keyword to include a header file?",
    options: ["#include", "include", "#import", "require"],
    answer: "#include",
  },
  {
    question: "Which function is used to open a file?",
    options: ["fopen()", "open()", "file()", "start()"],
    answer: "fopen()",
  },
  {
    question: "Which function reads a character from a file?",
    options: ["fgetc()", "getc()", "getchar()", "readchar()"],
    answer: "fgetc()",
  },
  {
    question: "What does EOF stand for?",
    options: ["End of File", "Error on File", "Execute on File", "End or Fail"],
    answer: "End of File",
  },
  {
    question: "Which function is used to close a file?",
    options: ["fclose()", "close()", "fileclose()", "endfile()"],
    answer: "fclose()",
  },
  {
    question: "What is the return type of main()?",
    options: ["int", "void", "char", "float"],
    answer: "int",
  },
  {
    question: "Which operator is used to increment a value?",
    options: ["++", "--", "+", "**"],
    answer: "++",
  },
  {
    question: "What is the result of 5 == 5?",
    options: ["true", "1", "false", "0"],
    answer: "1",
  },
  {
    question: "What is the result of 5 != 5?",
    options: ["1", "0", "true", "false"],
    answer: "0",
  },
  {
    question: "What is used to comment multiple lines?",
    options: ["/* */", "//", "#", "--"],
    answer: "/* */",
  },
  {
    question: "What is recursion?",
    options: ["Function calling itself", "Loop", "Pointer", "None"],
    answer: "Function calling itself",
  },
];

export default cQuestions;
