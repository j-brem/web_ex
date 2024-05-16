import { Dispatch, SetStateAction } from "react"
import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

export function Alerts({
  type,
  title,
  descriptions,
  action,
}: {
  type: string
  title: string
  descriptions: string[]
  action: Dispatch<SetStateAction<boolean>>
}) {

  console.log('>>>> ', type, title, descriptions)

  function warnWithDescription() {
    return (
      <div className="rounded-md bg-yellow-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">{title}</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                {descriptions[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function errorWithList() {
    return (
      <div className="rounded-md bg-red-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">{title}</h3>
            <div className="mt-2 text-sm text-red-700">
              <ul role="list" className="list-disc space-y-1 pl-5">
                {descriptions.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function okWithActions() {
    return (
      <div className="rounded-md bg-green-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800">{title}</h3>
            <div className="mt-2 text-sm text-green-700">
              <p>{descriptions[0]}</p>
            </div>
            <div className="mt-4">
              <div className="-mx-2 -my-1.5 flex">
                <button
                  type="button"
                  className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                >
                  View status
                </button>
                <button
                  type="button"
                  className="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                  onClick={() => action(false)}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function successSimply() {
    return (
      <div className="rounded-md bg-green-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">{title}</p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function infoWithLink() {
    return (
      <div className="rounded-md bg-blue-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
          </div>
          <div className="ml-3 flex-1 md:flex md:justify-between">
            <p className="text-sm text-blue-700">{descriptions[0]}</p>
            <p className="mt-3 text-sm md:ml-6 md:mt-0">
              <a href="#" className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
                Details
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }

  function renderAlert() {
    console.log('>>>> ', type, title, descriptions)
    if (type === 'warn') {
      return warnWithDescription()
    } else if (type === 'error') {
      return errorWithList()
    } else if (type === 'ok') {
      return okWithActions()
    } else if (type === 'success') {
      return successSimply()
    } else if (type === 'info') {
      return infoWithLink()
    }
  }

  return (
    <div className="z-50 fixed inset-0 bg-gray-800 bg-opacity-70 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="w-2/3 border border-gray-400 xs:w-1/3 md:w-2/5 xl:w-1/4 shadow-lg rounded-md bg-white">
        {renderAlert()}
      </div>
    </div>
  )
}