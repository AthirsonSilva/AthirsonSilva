interface IEmployee {
	getWorkplace(): string;
	getAmbition(): string;
	getRole(): string;
	setWorkplace(workplace: string): void;
	setAmbition(ambition: string): void;
	setRole(role: string): void;
}

class Me {
	private workplace: string;
	private role: string;
	private ambition: string;
	private languages: string[];

	constructor(
		workplace: string,
		role: string,
		ambition: string,
		languages: string[]
	) {
		this.workplace = workplace;
		this.role = role;
		this.ambition = ambition;
		this.languages = languages;
	}

	public getWorkplace = (): string => {
		return this.workplace;
	};

	public getAmbition = (): string => {
		return this.ambition;
	};

	public getRole = (): string => {
		return this.role;
	};

	public getLanguages = (): string[] => {
		return this.languages;
	};

	public setWorkplace = (workplace: string): void => {
		this.workplace = workplace;
	};

	public setAmbition = (ambition: string): void => {
		this.ambition = ambition;
	};

	public setRole = (role: string): void => {
		this.role = role;
	};

	public setLanguages = (languages: string[]): void => {
		this.languages = languages;
	};
}

const me = new Me(
	'Colégio Rio Branco',
	'IT Support intern',
	'Become a backend developer',
	['pt_BR', 'en_US']
);

// Output
me.getWorkplace();
me.getAmbition();
me.getRole();
me.getLanguages();

// Input
me.setWorkplace('Colégio Rio Branco');
me.setAmbition('Contribute to open source projects');
me.setRole('IT Support intern');
me.setLanguages(['pt_BR', 'en_US']);
