/**
 * this is an global jest config. with jest.config.setupFilesAfterEnv
 *
 * 	we can in this file to mock some config function. because some API jest can't distinguish(识别), which is need us to mock some api to make
 * 	function running success!
 *
 * 	example:
 * 		jest doesn't understand some browser api like localStorage, so we should mock api then test function contain
 * 		some browser api.
 *
 * 		but like most people use case, jest has provider some package lick jest-environment-jsdom, which is contain
 * 		all browser api, we just need to add config 'jsdom' into jest.config.testEnvironment
 *
 * 		but some other use less api, jest doesn't provider, which is real need to mock
 */

import 'jest-location-mock' // mock website url api, like window.location.href.

beforeAll(() => {
	// console.log('before all!!!!!')
})

/**
 * we often write some debug message in test unit, it will has so many debug console when we start doing test,
 * 	so we can use jest.spyOn(console, 'log').mockReturnValue() to mock some return message to hack it
 */
jest.spyOn(console, 'log').mockReturnValue()
jest.spyOn(console, 'info').mockReturnValue()
jest.spyOn(console, 'warn').mockReturnValue()
jest.spyOn(console, 'error').mockReturnValue()
