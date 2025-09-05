import { baseApi } from '@/shared';

import { AuthApiRoutes } from '../../AuthApiRoutes';
import type { UserDto } from '../../dto/Login/UserDto';
import type { LoginViaEmailDto } from '../../models/Login/LoginViaEmailDto';

class LoginApi {
  loginViaEmail = async (dto: LoginViaEmailDto): Promise<UserDto> => {
    const response = await baseApi.post<UserDto>(AuthApiRoutes.LOGIN_VIA_EMAIL, dto);

    return response.data;
  };
}

export const loginApi = new LoginApi();
