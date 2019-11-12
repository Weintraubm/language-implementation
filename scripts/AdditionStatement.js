

import { Statement, Lexeme, Expression } from "./modules.js";







/**



 * Implements the <code>&lt;addition_statement&gt;</code> nonterminal symbol from the grammar.



 */



class AdditionStatement extends Statement {



    /**



     * Creates a new AdditionStatement object.



     */



    constructor() {



        super();







        /**



         * @property {string} identifier - The identifier on the left-hand side of this operator.



         * @private



         */



        this._identifier = undefined;







        /**



         * @property {Expression} expression - The expression on the right-hand side of this operator.



         * @private



         */



        this._expression = undefined;



    }







    /**



     * Compares the remaining sequence of lexemes with the grammar rule for this nonterminal.



     * @argument lexer {Lexer} - An object containing a sequence of lexemes.



     * @modifies This nonterminal's parse tree.



     * @throws An error if the lexemes do not satisfy the grammar rule.



     * @public



     */



    parse(lexer) {



        // <AdditionStatement> ::= <identifier> + <expression>







        // Consume the next lexeme.



        let lexeme = lexer.getLexeme();



        



        // Verify the expected token.



        if (!lexeme || !lexeme.checkToken(Lexeme.tokens.identifier)) {



            throw new Error('Expected an identifier instead of "' + lexeme.source + '".');



        }



        



        // Store the identifier on the left-hand side of this statement.



        this._identifier = "/* TODO fix this identifier source */";







        // Consume the next lexeme.



        lexeme = lexer.getLexeme();



        



        // Verify the expected token.



        if (!lexeme || !lexeme.checkToken(Lexeme.tokens.assignment_operator)) {



            throw new Error('Expected an assignment operator instead of "' + lexeme.source + '".');



        }







        // Store the expression on the right-hand side of this statement.



        this._expression = Expression.parse(lexer);



    }







    /**



     * Builds an HTML representation of this program's parse tree.



     * @returns {string} An HTML unordered list representing the parse tree. 



     * @public



     */



    getParseTreeAsHtml() {



        let html = `



        <li>&lt;addition_statement&gt;



            <ul>



                <li>${this._identifier}</li>



                <li>=</li>



                <li>



                    ${this._expression.getParseTreeAsHtml()}



                </li>



            </ul>



        </li>`;







        return html;



    }







    /**



     * Simulates the effect of this node of the parse tree by executing equivalent JavaScript code.



     * @argument {external:Map} symbolTable - A lookup table of identifiers and their current values.



     * @modifies The symbol table argument.



     * @public



     */



    interpret(symbolTable) {



        // Update the symbol table to associate the expression's value with the identifier.

        

        //what do here?????

        let value = -1; /* TODO delegate this assignment's interpretation to its expression */ 



        symbolTable.set(this._identifier, value);



    }







    /**



     * Translates this nonterminal's parse tree into assembly language.



     * @argument {external:Map} symbolTable - A lookup table of identifiers and their associated memory addresses.



     * @modifies The symbol table argument.



     * @returns {string} Assembly code for this nonterminal's parse tree.



     * @public



     */



    compile(symbolTable) {



        // Get the identifier's storage address from the symbol table ...



        let address = "/* TODO fix this assignment target */";







        // ... if there is none, put the address into the symbol table. 



        if (!address) {



            // Store values at 4 byte offsets



            address = String(4 * (symbolTable.size + 1));



            symbolTable.set(this._identifier, address);



        }







        // Return the assembly code



        return `



# ${this._identifier} = ${this._expression.source}

/*

addition two operand assembly language

;A:=B

mov eax, [num1]

mov ebx, [num2]

;A:=A+B 

add eax,ebx 

*/



    mov eax, ${this._identifier.compile(symbolTable)}



    mov ebx, ${this._expression.compile(symbolTable)}

    

    //original for assign[rbp-${address}], eax`;

     

    add eax,ebx

    }



}







export { AdditionStatement};
