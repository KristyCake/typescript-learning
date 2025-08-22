interface Profile {
  name: string,
  age: number,
  address: string
}

type ProfileDraft = Partial<Profile>
let caaaaa: ProfileDraft = { name: 'Cake' }

