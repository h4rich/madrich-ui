import { Button } from '@/registry/new-york/ui/button'
import { Input } from '@/registry/new-york/ui/input'


const InputDemo = () => {
  return (
    <>
    <Input className="w-[200px]" type="email" placeholder="Email" />
    </>
  )
}


export const InputFileDemo = () => {
  return (
    <div className="grid w-full max-w-64 items-center gap-1.5">
      <label className='font-semibold' htmlFor="picture">Picture</label>
      <Input id="picture" type="file" />
    </div>
  )
}


export const InputDisabledDemo = () => {
  return (
    <Input
      className="max-w-[200px]"
      type="email"
      placeholder="Email"
      disabled
    />
  )
}

export const InputWithLabelDemo = () => {
  return (
    <div className="grid max-w-[200px] items-center gap-1.5">
      <label className='font-semibold' htmlFor="email">Email</label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}


export  const InputWithButtonDemo = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-4">
      <Input type="email" placeholder="Email" />
      <Button variant="default" type="submit">
        Subscribe
      </Button>
    </div>
  )
}

export default InputDemo