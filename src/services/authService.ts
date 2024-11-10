import { supabase } from "./supabaseClient";

export const authService = {
  async isAuthenticated() {
    const session = await supabase.auth.getSession();
    return !!session.data.session;
  },

  async requireAuth() {
    const isAuth = await this.isAuthenticated();
    if (!isAuth) {
      throw new Error("Authentication required");
    }
  },

  async getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  },

  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },
};
