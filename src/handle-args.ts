type Args = (string | undefined)[]

/**
 * handleArgs
 *
 * args: command or options
 *
 * commands:
 * sw, switch: switch
 * rm, remove: remove item
 *
 * options
 * --version, -v: version
 */
export const handleArgs = (): void => {
  const [, , ...userInputs] = process.argv as Args

  handleUserInputs(userInputs)
}

const handleUserInputs = (userInputs: Args) => {
  const [firstInput, ...options] = userInputs
}

const isCommand = (input: string) => {
  return input === '--version' || input === '-v'
}
