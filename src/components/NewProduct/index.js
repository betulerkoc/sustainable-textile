import {
  Input,
  Button,
  Checkbox,
  Select,
  Option,
} from "@material-tailwind/react";

export default function NewProduct() {
  return (
    <div className="m-auto max-w-xs my-16 flex flex-col gap-2">
      <Input variant="standard" label="Product" />
      <Input variant="standard" label="Content" />
      <Input variant="standard" label="Composition" />
      <Input variant="standard" label="Weight" />
      <div className="my-8">
        <Select label="Select Country">
          <Option>Turkey</Option>
          <Option>China</Option>
          <Option>Vietnam</Option>
          <Option>USA</Option>
          <Option>Bangladesh</Option>
        </Select>
      </div>
      <div>
        <Checkbox color="green" label="ISO 14040" />
        <Checkbox color="green" label="ISO 14044" />
        <Checkbox color="green" label="Life Cycle Assessment" />
        <Checkbox color="green" label="PEF-Product Environmental Footprint" />
      </div>

      <Button className="my-10">Submit</Button>
    </div>
  );
}
