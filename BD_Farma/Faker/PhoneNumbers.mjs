import {fakerES_MX as faker} from '@faker-js/faker'

import fs from 'fs'
import { format } from 'path'



// Generate 264 phone numbers and return them as an array

let phoneNumbers = Array.from({length: 264}, () => faker.phone.number("+52 (##) ########"))
// Save the phone numbers to a file

fs.writeFileSync('phoneNumbers.json', JSON.stringify(phoneNumbers, null, 2))



