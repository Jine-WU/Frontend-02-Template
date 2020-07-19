#### 运算符优先级

利用产生式一级一级的语法结构描述运算的优先级

1. Member Expresions

   - a.b
   - a[b]
   - Foo `string`
   - super.b
   - super['b']
   - new.target
   - new Foo()

2. Call Expresions —— 函数调用

   - foo()
   - super()
   - foo()['b'] —— 是member降级为 call Expresions
   - foo().b
   - foo()`b`

3. Left Handside && Right Handside —— 左手、右手运算

   只用 Left Handside 才有资格放到 = 的左边。

   Left Handside 主要判断表达式能不能放到 = 的左边而来。
   javaScript中不会定义 Right Handside ，只要不是 Left Handside 就是 Right Handside。

4. Update Expresions —— 自增自减

5. Uary Expresions —— 单目运算符

   - delete a.b
   - void foo() —— void运算符 不管后面什么东西都变成undefined，起到改变语法结构的作用。
   - typeof a
   - +a
   - -a
   - ~a
   - !a
   - Wait a

6. Exponential Expresions —— javaScript唯一一个右结合运算符

   - ** 次方 —— 3**2**3，3的(2的3次方)次方

7. Mustiplictive Expresions —— 乘除运算，*/%

8. Additive  Expresions —— 加减运算，+-

9. Shift Expresions —— 移位运算

10. Relationship Expresions —— 关系比较

11. Equality Expresions —— 相等比较

12. Bitwise Expresions —— 位运算

13. Logical Expresions —— 逻辑运算

14. Constional Expresions —— 三目运算

#### 引用类型

javaScript 利用引用类型处理删除、赋值等相关`写`操作

#### 类型转换

|           | Number         | String           | Boolean              | Undefined | Null | Object | Symbol |
| --------- | -------------- | ---------------- | -------------------- | --------- | ---- | ------ | ------ |
| Number    | -              |                  | 0 false,其他数值true | X         | X    | Boxing | X      |
| String    |                | -                | ""False,其他true     | X         | X    | Boxing | X      |
| Boolean   | true 1;false 0 | 'true';'false'   | -                    | X         | X    | Boxing | X      |
| Undefined | NaN            | 'Undefined'      | false                | -         | x    | X      | X      |
| Null      | 0              | 'null'           | false                | x         | -    | X      | X      |
| Object    | valueOf        | valueOf.toString | true                 | X         | X    | -      | X      |
| Symbol    | X              | X                | X                    | X         | X    | Boxing | -      |

1. Boxing —— 装箱转换
2. Unboxing —— 拆箱转换

#### Unboxing，拆箱转换

把object 装换成基本类型

1. ToPremitve
2. toString vs valueOf
3. Symbol.toPremitve

#### 运行时的概念

##### Completion Record: 语句执行的结果记录

1. [[type]]: normal、break、continue、return、or throw —— 类型
2. [[value]]: 基本类型 —— 值
3. [[target]]: label

Lexical Envirosonment 作用域

#### 语句

##### 简单语句 

指语句本身不会容纳其他语句的语句。

1. ExpresionStatement —— 表达式语句，最基本语句。
2. EmptyStatement —— 空语句
3. DebuggerStatement
4. ThrowStatement —— 控制语句，抛出异常
5. ContinueStatement —— 控制语句，结束当次循环
6. BreakStatement —— 控制语句，结束整个循环
7. ReturnStatement —— 控制语句，函数中使用，返回函数的值

##### 复合语句

1. BlockStatement
2. IfStatement
3. SwitchStatement
4. IterationStatement
5. WithStatement
6. LabeledStatement
7. TryStatement

##### 声明

1. FunctionDeclration
2. GeneratorDeclration
3. AsyncFunctionDeclration
4. AsyncGeneratorDeclration
5. VariableStatement —— var
6. ClassDeclration
7. LexicalDeclration —— const、let

#### JS执行力度（运行时）

- 宏任务
- 微任务（Promise）
- 函数调用（Execution Context）
- 语句/声明（Completion Record）
- 表达式（Reference）
- 直接量/变量/this

#### 函数调用

栈式调用关系，stack数据结构。

Execution Context —— 执行上下文

Execution Context Stack —— 执行上下文栈

Running Execution Context —— 运行时执行上下文

##### Execution Context

1. code evaluation tate 

   用于async、generator函数，用于记录代码执行位置的保存信息

2. Funation

3. Script or Module

4. Generator

5. Realm

   保存我们所有使用的内置对象的领域。

6. LexicalEnvironment

7. VariableEnvironment



#### 个人学习总结

emmmm，很明显，通过两周javaScript的学习，对js引擎有了一定的了解。通过对编程语言的颗粒度的细分有助于了解语言开发过程、运行时的区别。但还是需要在平时编程生活中消化这部分知识。本周最后一个练习暴露自己阅读外语文档能力的不足，还没法掌握 Realm 的知识。



