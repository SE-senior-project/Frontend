<template>
  <div class="mx-2 flex justify-center pb-8">
    <div class="align-item-start rounded mt-4 w-full max-w-md flex flex-col md:flex-row">
      <img class="w-full h-auto object-contain" src="../../../src/assets/LogoOnemeasure.png" alt="" />
      
        <Form
          class="flex flex-col gap-y-4"
          @submit="onSubmit"
          :validation-schema="schema"
        >
          <FormWrapper label="Login">
            <div class="flex flex-col gap-x-2 md:flex-row border border-red-600 ">
              <TextField
                type="text"
                name="email"
                placeholder="Email"
                label="Email"
                required
              />
              <TextField
                type="password"
                name="password"
                placeholder="Password"
                label="Password"
                required
              />
            </div>
            <PrimaryButton>Submit</PrimaryButton>
          </FormWrapper>
        </Form>
    </div>
  </div>
</template>