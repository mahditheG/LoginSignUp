export const validate = (data, type) => {
     const msg = {}

     if (type === 'signup') {
          if (!data.name.trim()) {
               msg.name = 'Username required'
          } else {
               delete msg.name
          }
          if (!data.confirmPassword) {
               msg.confirmPassword = 'Confirm Password required'
          } else if (data.confirmPassword !== data.password) {
               msg.confirmPassword = 'Password did not match'
          } else {
               delete msg.confirmPassword
          }
          if (!data.isAccepted) {
               msg.isAccepted = 'Accept the Terms'
          } else {
               delete msg.isAccepted
          }

     }


     if (!data.email) {
          msg.email = 'Email required'
     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
          msg.email = 'Email invalid'
     } else {
          delete msg.email
     }
     if (!data.password) {
          msg.password = 'Password required'
     } else if (data.password.length < 6) {
          msg.password = 'Password must be more than 5 characters '
     } else {
          delete msg.password
     }

     return msg
}