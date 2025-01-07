import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import { InputControl, InputPrefix, InputRoot } from "./components/Input";
import { SettingsTabs } from "./components/SettingsTabs";
import * as FileInput from "./components/Form/FileInput";
import { Select } from "./components/Form/Select";
import { SelectItem } from "./components/Form/Select/selectItem";
import { TextArea } from "./components/Form/textArea";
import { Button } from "./components/button";


export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between items-center pb-5 border-b border-zinc-200 dark:border-zinc-700">

          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              type="button"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              form="settings">
              Save
            </Button>
          </div>

        </div>
        <form id="settings"
          className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700">

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Name
            </label>
            <div className="gap-6 flex flex-col lg:grid lg:grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Sergio" />
              </InputRoot>
              <div className="flex flex-col gap-3 lg:block">
                <label htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only">
                  Last name
                </label>
                <InputRoot>
                  <InputControl defaultValue="Filho" />
                </InputRoot>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email address
            </label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputPrefix>
                  <Mail className="h-5 w-5 text-zinc-500" /></InputPrefix>
                <InputControl id="email" type="email" defaultValue="contato.sergiorbf@gmail.com" />
              </InputRoot>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Your photo
              <span
                className="text-sm font-normal
               text-zinc-500 block mt-0.5">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex lg:items-start gap-5 lg:flex-row flex-col">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Root />
              <FileInput.Control />
            </FileInput.Root>

          </div>

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Role
            </label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControl
                  id="role"
                  type="text"
                  defaultValue="DEV" />
              </InputRoot>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Country
            </label>
            <Select placeholder="Select a country">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>

          </div>

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Timezone
            </label>
            <Select placeholder="Select a timezone">
              <SelectItem value="utc8" text="Pacific Standard Time (UTC-08:00)" />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Bio
              <span
                className="text-sm font-normal
               text-zinc-500 block mt-0.5">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="gap-3 flex flex-col lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" defaultChecked text="Normal Text" />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                </div>
              </div>
              <TextArea
                defaultValue="I'm a Product Designer based in Auckland, New Zealand. I specialise in UX/UI design, brand strategy, and Webflow development."
                id="bio" />
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form pt-5">
            <label
              htmlFor="project"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Portfolio Projects
              <span
                className="text-sm font-normal
               text-zinc-500 block mt-0.5">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Root />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button
              variant="outline"
              type="button"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              form="settings">
              Save
            </Button>

          </div>
        </form>
      </div>
    </>
  );
}
