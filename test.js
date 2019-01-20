import test from 'ava';
import voidReactNativeTags from './void';
import reactNativeTags from '.';

test('`react-native-tags` is an array of React Native string tags', t => {
	t.true(Array.isArray(reactNativeTags));
	t.true(reactNativeTags.length > 10 && reactNativeTags.length < 1000);

	reactNativeTags.forEach(tagName => {
		t.true(typeof tagName === 'string');
	});
});

test('`react-native-tags/void` is an array of void React Native Void string tags', t => {
	t.true(Array.isArray(voidReactNativeTags));
	t.true(voidReactNativeTags.length > 10 && voidReactNativeTags.length < 1000);

	voidReactNativeTags.forEach(tagName => {
		t.true(typeof tagName === 'string');
	});
});
