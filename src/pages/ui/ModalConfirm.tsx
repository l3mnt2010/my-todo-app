import { Dialog, Transition } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { Fragment, useState } from 'react'

const MyDialog = () => {
    let [isShow, setIsOpen] = useState(true)

    const handleClick = (action?: string) => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }
    return (
        <><h1></h1>
            {/* <ModalCustomize
                isShow={isShow}
                handleOpen={handleClick}
                handleClose={handleClose}
                valueModal="Thank you for using our service. We'll annouce you as soon as we complete this feature."
                titleModal="Coming soon"
            /> */}
            <Transition appear show={isShow} as={Fragment}>
                <Dialog as="div" className="relative z-10 " onClose={() => { }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xs transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="flex">
                                        <button className="ml-auto" onClick={handleClose}>
                                            <XCircleIcon className="h-5 w-5 text-gray-500" />
                                        </button>
                                    </div>
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 dark:text-white ">
                                        ABOUT PAGE
                                    </Dialog.Title>

                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500 dark:text-white ">Thanks you for using our service </p>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to use Modal?</span>
                        <span className="block text-indigo-600">About page.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow"
                            onClick={() => { handleClick() }}
                        >
                            <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                            >
                                Modal Customize
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}
export default MyDialog