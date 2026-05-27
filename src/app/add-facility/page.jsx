"use client";

import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
  Card,
  Toast,
} from "@heroui/react";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

const AddFacilitiesPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const facility = Object.fromEntries(formData.entries());

    console.log(facility);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/facility`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(facility),
      }
    );
  
    toast.success("Facility added successfully!");
    router.push("/facilities");
    

    const data = await res.json();

    console.log(data);
  };

  return (
    <div className="p-5 max-w-7xl mx-auto">

      <h1 className="text-3xl font-bold mb-5">
        Add Facility
      </h1>

      <Card>

        <form
          onSubmit={onSubmit}
          className="p-10 space-y-8 w-full"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Facility Name */}
            <div className="md:col-span-2">
              <TextField name="facilityName" isRequired>
                <Label>Facility Name</Label>

                <Input
                  placeholder="Skyline Football Arena"
                  className="rounded-2xl"
                />

                <FieldError />
              </TextField>
            </div>

            {/* Facility Type */}
            <div>
              <Select
                name="facilityType"
                isRequired
                className="w-full"
                placeholder="Select Facility Type"
              >

                <Label>Facility Type</Label>

                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>

                    <ListBox.Item id="Football Turf">
                      Football Turf
                    </ListBox.Item>

                    <ListBox.Item id="Gym">
                      Gym
                    </ListBox.Item>

                    <ListBox.Item id="Swimming Pool">
                      Swimming Pool
                    </ListBox.Item>

                    <ListBox.Item id="Conference Hall">
                      Conference Hall
                    </ListBox.Item>

                    <ListBox.Item id="Event Venue">
                      Event Venue
                    </ListBox.Item>

                  </ListBox>
                </Select.Popover>

              </Select>
            </div>

            {/* Location */}
            <TextField name="location" isRequired>
              <Label>Location</Label>

              <Input
                placeholder="Dhaka, Bangladesh"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Price Per Hour */}
            <TextField
              name="pricePerHour"
              type="number"
              isRequired
            >
              <Label>Price Per Hour</Label>

              <Input
                type="number"
                placeholder="100"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Capacity */}
            <TextField
              name="capacity"
              type="number"
              isRequired
            >
              <Label>Capacity</Label>

              <Input
                type="number"
                placeholder="20"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Time Slots */}
            <TextField
              name="availableTimeSlots"
              isRequired
            >
              <Label>Available Time Slots</Label>

              <Input
                placeholder="08:00 AM - 10:00 AM"
                className="rounded-2xl"
              />

              <FieldError />
            </TextField>

            {/* Image URL */}
            <div className="md:col-span-2">
              <TextField name="image" isRequired>

                <Label>Image URL</Label>

                <Input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  className="rounded-2xl"
                />

                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField
                name="description"
                isRequired
              >

                <Label>Description</Label>

                <TextArea
                  placeholder="Write facility description..."
                  className="rounded-3xl"
                />

                <FieldError />
              </TextField>
            </div>

          </div>

          <Button
            type="submit"
            className="rounded-none w-full bg-cyan-500 text-white"
          >
            Add Facility
          </Button>

        </form>

      </Card>
    </div>
  );
};

export default AddFacilitiesPage;