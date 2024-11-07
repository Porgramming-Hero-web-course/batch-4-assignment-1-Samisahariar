{
    interface InterfacePro {
        name: string
        age: number
        email: string
    }

    function updateProfile(profile: InterfacePro, updates: { [p in keyof InterfacePro] ?  : InterfacePro[p]  }): InterfacePro {
        return { ...profile, ...updates };
    }
}