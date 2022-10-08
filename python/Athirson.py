class Me:
    def __init__(self, name, role, workplace, languages):
        self.__name = name
        self.__role = role
        self.__workplace = workplace
        self.__languages = languages

    def setName(self, name) -> None:
        self.__name = name

    def getName(self) -> str:
        return self.__name

    def setRole(self, role) -> None:
        self.__role = role

    def getRole(self) -> str:
        return self.__role

    def setWorkplace(self, workplace) -> None:
        self.__workplace = workplace

    def getWorkplace(self) -> str:
        return self.__workplace

    def setLanguages(self, languages) -> None:
        self.__languages = languages

    def getLanguages(self) -> str:
        return self.__languages


me = Me('Athirson Silva', 'IT Support intern',
        'Colégio Rio Branco', ['pt_BR', 'en_US'])

# Output
print(me.getName())
print(me.getRole())
print(me.getWorkplace())
print(me.getLanguages())

# Input
me.setName('Athirson Silva')
me.setRole('IT Support intern')
me.setWorkplace('Colégio Rio Branco')
me.setLanguages(['pt_BR', 'en_US'])
