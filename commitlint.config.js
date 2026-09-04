export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		// Regras para o commit ser no formato "type(scope): subject"
    // O tipo deve ser preenchido e seguir um conjunto de valores permitidos (ex: feat, fix, docs)
    'type-enum': [2, 'always', ["build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test"]],
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],

    // O escopo é obrigatório e segue o formato entre parênteses
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],

    // O assunto (subject) não pode estar vazio, não pode terminar com ponto e deve ter um tamanho mínimo
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-max-length': [2, 'always', 144],

    // Garante que o corpo e o rodapé seguem boas práticas opcionais
    'body-leading-blank': [1, 'always'],
		'body-max-length': [2, 'always', Infinity],
		'body-max-line-length': [2, 'always', Infinity],
    'footer-leading-blank': [1, 'always'],
  },
	prompt: {
		settings: {
			enableMultipleScopes: true,
			scopeEnumSeparator: ','
		},
		messages: {
			skip: ': pular',
			max: 'máximo %d caracteres',
			min: 'mínimo %d caracteres',
			emptyWarning: 'não pode estar vazio',
			upperLimitWarning: 'excedeu o limite',
			lowerLimitWarning: 'abaixo do limite'
		},
		questions: {
			type: {
				description: 'Selecione o tipo de mudança que você está commitando:',
				enum: {
					feat: {
						description: 'Uma nova funcionalidade',
						title: 'Novas Funcionalidades',
						emoji: '✨'
					},
					fix: {
						description: 'Uma correção de bug',
						title: 'Correções de Bug',
						emoji: '🐛'
					},
					docs: {
						description: 'Apenas mudanças de documentação',
						title: 'Documentação',
						emoji: '📚'
					},
					style: {
						description: 'Mudanças que não afetam o significado do código (espaços em branco, formatação, etc)',
						title: 'Estilos',
						emoji: '💎'
					},
					refactor: {
						description: 'Uma mudança no código que não corrige bug nem adiciona funcionalidade',
						title: 'Refatoração de Código',
						emoji: '📦'
					},
					perf: {
						description: 'Uma mudança no código que melhora a performance',
						title: 'Melhorias de Performance',
						emoji: '🚀'
					},
					test: {
						description: 'Adicionar testes faltantes ou corrigir testes existentes',
						title: 'Testes',
						emoji: '🚨'
					},
					build: {
						description: 'Mudanças que afetam o sistema de build ou dependências externas',
						title: 'Builds',
						emoji: '🛠'
					},
					ci: {
						description: 'Mudanças nos arquivos de configuração do CI (Travis, Circle, etc)',
						title: 'Integração Contínua',
						emoji: '⚙️'
					},
					chore: {
						description: 'Outras mudanças que não modificam arquivos src ou test',
						title: 'Tarefas',
						emoji: '♻️'
					},
					revert: {
						description: 'Reverte um commit anterior',
						title: 'Reverts',
						emoji: '🗑'
					}
				}
			},
			scope: {
				description: 'Qual é o escopo desta mudança (escreva em minúscula)? (ex: componente, arquivo)'
			},
			subject: {
				description: 'Escreva uma descrição curta e imperativa da mudança'
			},
			body: {
				description: 'Forneça uma descrição mais longa da mudança'
			},
			isBreaking: {
				description: 'Há alguma mudança incompatível?'
			},
			breakingBody: {
				description: 'Uma mudança BREAKING CHANGE requer um corpo. Por favor, digite uma descrição mais longa'
			},
			breaking: {
				description: 'Descreva as mudanças incompatíveis'
			},
			isIssueAffected: {
				description: 'Esta mudança afeta alguma issue aberta?'
			},
			issuesBody: {
				description: 'Se issues forem fechadas, o commit requer um corpo. Por favor, digite uma descrição mais longa'
			},
			issues: {
				description: 'Adicione referências de ordem de ticket / issues (ex: "fix #123", "re #123")'
			}
		}
	}
};