export type Profile = {
    name : string,
    email : string,
    phone : string,
    avatarUrl : string,
}

export type UserInfoState = {
    profile: Profile;
	loading: boolean;
	error: boolean | undefined;
}

export type AuthState = {
    token: string|null;
}