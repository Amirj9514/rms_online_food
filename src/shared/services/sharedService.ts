import axios, { AxiosResponse, AxiosError } from "axios";

const apiUrl = process.env.REACT_APP_API_URL; // Make sure to define your API URL in your environment variables

export class ApiService {
  handleError(error: AxiosError) {
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error(
        "Response error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // Request was made but no response was received
      console.error("Request error:", error.request);
    } else {
      // Something happened in setting up the request
      console.error("Error:", error.message);
    }
  }

  /** Get Request **/
  public async sendGetRequest(target: string): Promise<any> {
    try {
      const response: AxiosResponse<any> = await axios.get(
        `${apiUrl}${target}`
      );
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  /** Post Request **/
  public async sendPostRequest(target: string, data: any): Promise<any> {
    try {
      const response: AxiosResponse<any> = await axios.post(
        `${apiUrl}${target}`,
        data
      );
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  /** Put Request **/
  public async sendPutRequest(target: string, data: any): Promise<any[]> {
    try {
      const response: AxiosResponse<any> = await axios.put(
        `${apiUrl}${target}`,
        data
      );
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  /** Patch Request **/
  public async sendPatchRequest(target: string, data: any): Promise<any[]> {
    try {
      const response: AxiosResponse<any> = await axios.patch(
        `${apiUrl}${target}`,
        data
      );
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  /** Delete Request **/
  public async sendDeleteRequest(target: string): Promise<any[]> {
    try {
      const response: AxiosResponse<any> = await axios.delete(
        `${apiUrl}${target}`
      );
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  //   -------------------------------------------------------------------------------------------------
  //   Request With Token And Other Headers
  //   -------------------------------------------------------------------------------------------------

  /** Get Request with Auth Token **/
  public async sendGetRequest2(target: string, token: string): Promise<any[]> {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response: AxiosResponse<any> = await axios.get(
        `${apiUrl}${target}`,
        { headers }
      );
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  /** Post Request with Token Auth **/
  public async sendPostRequest2(
    target: string,
    token: string,
    data: any
  ): Promise<any[]> {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response: AxiosResponse<any> = await axios.post(
        `${apiUrl}${target}`,
        { headers },
        data
      );
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }
}
