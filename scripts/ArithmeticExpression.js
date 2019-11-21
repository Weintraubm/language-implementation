import {Expression, Lexeme} from "./modules.js";

/**
 * Implements use of the <code>&lt;number&gt;</code> nonterminal as an expression in our grammar.
 */
class ArithmeticExpression extends Expression {
    /**
     * Creates a new ArithmeticExpression.
     */
    constructor() {
        super();
        
        /**
         * @property {string} source - The source code for this expression.
         * @public
         */
        this.operand1;
        this.operand2;
        this.operator;
    }

    /**
     * Compares the remaining sequence of lexemes with the grammar rule for this nonterminal.
     * @argument lexer {Lexer} - An object containing a sequence of lexemes.
     * @modifies This nonterminal's parse tree.
     * @throws An error if the lexemes do not satisfy the grammar rule.
     * @public
     */
    parse(lexer) {
        let lexeme = lexer.getLexeme();

        if (!lexeme || !lexeme.checkToken(Lexeme.tokens.addition_operator)) {
            throw new Error('Expected one of +,-,*,/ instead of "' + lexeme.source + '".');
        }

        this.operator = lexeme.source;
        this.operand1 = Expression.parse(lexer);
        this.operand2 = Expression.parse(lexer);
    }

    /**
     * Builds an HTML representation of this program's parse tree.
     * @returns {string} An HTML unordered list representing the parse tree. 
     * @public
     */
    getParseTreeAsHtml() {
        return `&lt;arithmetic_expression&gt;
            <ul>
                <li>${this.operator} 
                    <ul>
                        <li>
                           ${this.operand1.getParseTreeAsHtml()}
                        </li>
                        <li>
                           ${this.operand2.getParseTreeAsHtml()}
                        </li>
                    </ul>
                </li>
            </ul>`;
    }

    /**
     * Simulates the effect of this node of the parse tree by executing equivalent JavaScript code.
     * @argument {Map} symbolTable - A lookup table of identifiers and their current values.
     * @returns The value of this expression.
     * @public
     */
    interpret(symbolTable) {
        let value = this.operand1.interpret(symbolTable);
        let value2 = this.operand2.interpret(symbolTable)

        if (this.operator === "+")
          return new Number(value + value2);
        
        else if (this.operator === "-")
          return new Number(value - value2);
        
        else if (this.operator === "@")
          return new Number(value * value2);
        
        else if (this.operator === "%") 
          return new Number (value / value2);
    }

    /**
     * Translates this nonterminal's parse tree into assembly language.
     * @argument {Map} symbolTable - A lookup table of identifiers and their associated memory addresses.
     * @returns {string} Assembly code for this nonterminal's parse tree.
     * @public
     */
    compile(symbolTable) {
      return `
        mov edx, ${this.operand1.compile(symbolTable)}
        mov eax, ${this.operand2.compile(symbolTable)}
        add eax, edx `
    }
}

export {ArithmeticExpression};