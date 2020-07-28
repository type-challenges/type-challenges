
import { Equal, Expect } from '@type-challenges/utils'

SimpleVue({
  data() {
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`
    },
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase())
    },
    test() {
      const fullname = this.fullname
      const cases: [
        Expect<Equal<typeof fullname, string>>,
      ] = [] as any
    },
  },
})
