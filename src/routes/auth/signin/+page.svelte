<div class="p-8 gap-8 flex flex-col items-center">
	<p>Sign in to access StrongBastion resources.</p>

	<form class="w-full flex flex-col gap-4">
		<input
			type="email"
			id="email"
			class="px-4 py-2 border border-gray-300 rounded-lg"
			placeholder="juandelacruz@email.com"
		/>
		<input
			type="password"
			id="password"
			class="px-4 py-2 border border-gray-300 rounded-lg"
			placeholder="Enter your password"
		/>
		<!-- TODO implement password reset -->
		<a href="/auth/signin" class="text-xs text-brand-accent">Forgot your password?</a>
		<button class="px-4 py-2 bg-brand-primary text-white rounded-lg">Sign in</button>
	</form>
	<div>
		<span>Don't have an account?</span>
		<span><a href="/auth/signup" class="text-brand-primary">Sign up</a></span>
	</div>
</div>
